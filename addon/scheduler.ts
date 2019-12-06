import Ember from 'ember';
import { Promise } from 'rsvp';
import { run } from '@ember/runloop';
import Router from '@ember/routing/router';
import { DEBUG } from '@glimmer/env';
import { gte } from 'ember-compatibility-helpers';
import { buildWaiter, Token, TestWaiter } from 'ember-test-waiters';

interface Deferred {
  isResolved: boolean;
  promise: Promise<any>;
  resolve: Function;
  reject: Function;
}

interface Capabilities {
  requestAnimationFrameEnabled: boolean;
  requestIdleCallbackEnabled: boolean;
}

const APP_SCHEDULER_LABEL: string = 'ember-app-scheduler';
const APP_SCHEDULER_HAS_SETUP: string = '__APP_SCHEDULER_HAS_SETUP__';

let _whenRouteDidChange: Deferred;
let _whenRoutePainted: Promise<any>;
let _whenRoutePaintedScheduleFn: Function;
let _whenRouteIdle: Promise<any>;
let _whenRouteIdleScheduleFn: Function;
const CAPABILITIES: Capabilities = {
  requestAnimationFrameEnabled: typeof requestAnimationFrame === 'function',
  requestIdleCallbackEnabled: typeof requestIdleCallback === 'function',
};
let _capabilities = CAPABILITIES;

export const USE_REQUEST_IDLE_CALLBACK: boolean = true;
export const SIMPLE_CALLBACK = (callback: Function) => callback();
const IS_FASTBOOT = typeof (<any>window).FastBoot !== 'undefined';
const waiter = buildWaiter('ember-app-scheduler-waiter');

reset();

export function beginTransition(): void {
  if (_whenRouteDidChange.isResolved) {
    _whenRouteDidChange = _defer(APP_SCHEDULER_LABEL);
    _whenRoutePainted = _whenRouteDidChange.promise.then(() =>
      _afterNextPaint(_whenRoutePaintedScheduleFn)
    );
    _whenRouteIdle = _whenRoutePainted.then(() =>
      _afterNextPaint(_whenRouteIdleScheduleFn).finally(() => {
        performance.mark('appSchedulerEnd');
        performance.measure(
          'appScheduler',
          'appSchedulerStart',
          'appSchedulerEnd'
        );
      })
    );
  }
}

export function endTransition(): void {
  _whenRouteDidChange.resolve();
  performance.mark('appSchedulerStart');
}

export function setupRouter(router: Router): void {
  if (IS_FASTBOOT || (router as any)[APP_SCHEDULER_HAS_SETUP]) {
    return;
  }

  (router as any)[APP_SCHEDULER_HAS_SETUP] = true;

  if (gte('3.6.0')) {
    router.on('routeWillChange', beginTransition);
    router.on('routeDidChange', endTransition);
  } else {
    router.on('willTransition', beginTransition);
    router.on('didTransition', endTransition);
  }
}

export function reset(): void {
  _whenRouteDidChange = _defer(APP_SCHEDULER_LABEL);
  _whenRoutePainted = _whenRouteDidChange.promise.then();
  _whenRouteIdle = _whenRoutePainted.then();

  (<TestWaiter>waiter).items.clear();

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
 */
export function didTransition(): Promise<any> {
  return _whenRouteDidChange.promise;
}

/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 */
export function whenRoutePainted(): Promise<any> {
  return _whenRoutePainted;
}

/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 */
export function whenRouteIdle(): Promise<any> {
  return _whenRouteIdle;
}

/**
 * Used for testing
 */
export function routeSettled(): Promise<any> {
  return _whenRouteIdle;
}

export function _getScheduleFn(
  useRequestIdleCallback = false
): (callback: any) => number {
  if (
    DEBUG &&
    useRequestIdleCallback &&
    _capabilities.requestIdleCallbackEnabled
  ) {
    return callback =>
      Ember.testing
        ? requestAnimationFrame(callback)
        : requestIdleCallback(callback);
  } else if (
    useRequestIdleCallback &&
    _capabilities.requestIdleCallbackEnabled
  ) {
    return requestIdleCallback;
  } else if (_capabilities.requestAnimationFrameEnabled) {
    return requestAnimationFrame;
  } else {
    return SIMPLE_CALLBACK;
  }
}

export function _setCapabilities(newCapabilities = CAPABILITIES): void {
  _capabilities = newCapabilities;
  _whenRoutePaintedScheduleFn = _getScheduleFn();
  _whenRouteIdleScheduleFn = _getScheduleFn(USE_REQUEST_IDLE_CALLBACK);
}

_whenRoutePaintedScheduleFn = _getScheduleFn();
_whenRouteIdleScheduleFn = _getScheduleFn(USE_REQUEST_IDLE_CALLBACK);

function _afterNextPaint(scheduleFn: Function): Promise<any> {
  let token: Token;
  let promise = new Promise(resolve => {
    if (DEBUG) {
      token = waiter.beginAsync();
    }

    scheduleFn(() => {
      run.later(resolve, 0);
    });
  });

  if (DEBUG) {
    promise = promise.finally(() => {
      waiter.endAsync(token);
    });
  }

  return promise;
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
