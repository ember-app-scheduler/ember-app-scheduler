/** @documenter yuidoc */

import { registerDestructor } from '@ember/destroyable';
import { addListener } from '@ember/object/events';
import type RouterService from '@ember/routing/router-service';
import { schedule } from '@ember/runloop';
import { buildWaiter, Token } from '@ember/test-waiters';
import { tracked } from '@glimmer/tracking';
import { Promise } from 'rsvp';

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

class Scheduler {
  @tracked isIdle = false;
}
const scheduler = new Scheduler();
export default scheduler;

/**
 * Initializes the top level promise that initiates the post-render work.
 *
 * @public
 * @function beginTransition
 * @return {void}
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
    scheduler.isIdle = false;
  }
}

/**
 * Initiates the post-render work.
 *
 * @public
 * @function endTransition
 * @return {void}
 */
export function endTransition(): void {
  _whenRouteDidChange.resolve();
  scheduler.isIdle = true;
  mark('appSchedulerStart');
}

/**
 * Connects the router's transition events to
 * app scheduler's work.
 *
 * @public
 * @function setupRouter
 * @param {RouterService|Router} router An instance of a RouterService or an Ember Router.
 * @return {void}
 */
export function setupRouter(router: RouterService): void {
  if (IS_FASTBOOT || (router as any)[APP_SCHEDULER_HAS_SETUP]) {
    return;
  }

  (router as any)[APP_SCHEDULER_HAS_SETUP] = true;

  // @ts-ignore
  addListener(router, 'routeWillChange', beginTransition);
  // @ts-ignore
  addListener(router, 'routeDidChange', endTransition);

  registerDestructor(router, reset);
}

/**
 * Resets the state of app scheduler's top-level scheduled work promise.
 *
 * @public
 * @function reset
 * @return {void}
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
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 * @function whenRouteIdle
 * @return {Promise<any>} The scheduled work promise.
 */
export function whenRouteIdle(): Promise<any> {
  return _whenRouteIdle;
}

/**
 * Allows for tests to pause until the scheduled work
 * promise is completed.
 *
 * @public
 * @function routeSettled
 * @return {Promise<any>} The scheduled work promise.
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
