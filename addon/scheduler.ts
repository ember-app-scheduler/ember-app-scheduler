import { Promise } from 'rsvp';
import { schedule } from '@ember/runloop';
import { deprecate } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import Router from '@ember/routing/router';
import type RouterService from '@ember/routing/router-service';
import Service from '@ember/service';
import { addListener } from '@ember/object/events';
import { gte } from 'ember-compatibility-helpers';
import { buildWaiter, Token } from '@ember/test-waiters';

interface Deferred {
  isResolved: boolean;
  promise: Promise<any>;
  resolve: Function;
  reject: Function;
}

const APP_SCHEDULER_LABEL: string = 'ember-app-scheduler';
const APP_SCHEDULER_HAS_SETUP: string = '__APP_SCHEDULER_HAS_SETUP__';

let _whenRouteDidChange: Deferred;
let _whenRouteIdle: Promise<unknown>;

const IS_FASTBOOT = typeof (<any>window).FastBoot !== 'undefined';
const waiter = buildWaiter('ember-app-scheduler-waiter');

reset();

/**
 * Initializes the top level promise that initiates the post-render work.
 */
export function beginTransition(): void {
  if (_whenRouteDidChange.isResolved) {
    _whenRouteDidChange = _defer(APP_SCHEDULER_LABEL);
    _whenRouteIdle = _whenRouteDidChange.promise.then(() => {
      let scheduledWorkToken: Token = <Token>waiter.beginAsync();

      return new Promise((resolve) => {
        schedule('afterRender', null, () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
          });
        });
      }).finally(() => {
        waiter.endAsync(scheduledWorkToken);
        mark('appSchedulerEnd');
        measure('appScheduler', 'appSchedulerStart', 'appSchedulerEnd');
      });
    });
  }
}

/**
 * Initiates the post-render work.
 */
export function endTransition(): void {
  _whenRouteDidChange.resolve();
  mark('appSchedulerStart');
}

/**
 * Correct connects the router's transition events to
 * app scheduler's work.
 *
 * @param {RouterService|Router} router An instance of a RouterService or an Ember Router.
 */
export function setupRouter(router: RouterService | Router): void {
  if (IS_FASTBOOT || (router as any)[APP_SCHEDULER_HAS_SETUP]) {
    return;
  }

  deprecate(
    'The use of Ember.Router in setupRouter is deprecated. Please use the router service.',
    router instanceof Router,
    {
      id: 'ember-app-scheduler.setupRouter',
      until: '6.0.0',
    }
  );

  (router as any)[APP_SCHEDULER_HAS_SETUP] = true;

  if (gte('3.6.0') || router instanceof Service) {
    // @ts-ignore
    addListener(router, 'routeWillChange', beginTransition);
    // @ts-ignore
    addListener(router, 'routeDidChange', endTransition);
  } else {
    addListener(router, 'willTransition', beginTransition);
    addListener(router, 'didTransition', endTransition);
  }

  registerDestructor(router, reset);
}

/**
 * Resets the state of app scheduler's top-level scheduled work promise.
 */
export function reset(): void {
  _whenRouteDidChange = _defer(APP_SCHEDULER_LABEL);
  _whenRouteIdle = _whenRouteDidChange.promise.then();

  waiter.reset();

  if (!IS_FASTBOOT) {
    _whenRouteDidChange.resolve();
  }
}

/**
 * Top level promise that represents the entry point for deferred work.
 * Subsequent promises are chained off this promise, successively composing
 * them together to approximate when painting has occurred.
 *
 * @public
 * @return {Promise} The top-level scheduled work promise.
 */
export function didTransition(): Promise<any> {
  deprecate(
    'The `didTransition` function is deprecated. Please use `whenRouteIdle` instead.',
    false,
    {
      id: 'ember-app-scheduler.didTransition',
      until: '4.0.0',
    }
  );

  return _whenRouteDidChange.promise;
}

/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 * @return {Promise} The scheduled work promise.
 */
export function whenRoutePainted(): Promise<any> {
  deprecate(
    'The `whenRoutePainted` function is deprecated. Please use `whenRouteIdle` instead.',
    false,
    {
      id: 'ember-app-scheduler.whenRoutePainted',
      until: '4.0.0',
    }
  );

  return _whenRouteIdle;
}

/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 * @return {Promise} The scheduled work promise.
 */
export function whenRouteIdle(): Promise<any> {
  return _whenRouteIdle;
}

/**
 * Allows for tests to pause until the scheduled work
 * promise is completed.
 *
 * @return {Promise} The scheduled work promise.
 */
export function routeSettled(): Promise<any> {
  return _whenRouteIdle;
}

function _defer(label: string): Deferred {
  let _isResolved = false;
  let _resolve!: () => void;
  let _reject!: () => void;

  const promise = new Promise((resolve, reject) => {
    _resolve = () => {
      _isResolved = true;

      resolve();
    };
    _reject = reject;
  }, label);

  return {
    promise,
    resolve: _resolve,
    reject: _reject,
    get isResolved() {
      return _isResolved;
    },
  };
}

function mark(markName: string): void {
  try {
    performance.mark(markName);
  } catch (ex) {
    console.warn(
      `performance.mark could not be executed because of ${ex.message}`
    );
  }
}

function measure(
  measureName: string,
  startMark: string | undefined,
  endMark: string | undefined
) {
  try {
    performance.measure(measureName, startMark, endMark);
  } catch (ex) {
    console.warn(
      `performance.measure could not be executed because of ${ex.message}`
    );
  }
}
