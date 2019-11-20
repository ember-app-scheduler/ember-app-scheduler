import { Promise } from 'rsvp';
import { schedule } from '@ember/runloop';
import { deprecate } from '@ember/debug';
import Router from '@ember/routing/router';
import { gte } from 'ember-compatibility-helpers';
import { buildWaiter, Token } from 'ember-test-waiters';

interface Deferred {
  isResolved: boolean;
  promise: Promise<any>;
  resolve: Function;
  reject: Function;
}

const APP_SCHEDULER_LABEL: string = 'ember-app-scheduler';
const APP_SCHEDULER_HAS_SETUP: string = '__APP_SCHEDULER_HAS_SETUP__';

let _whenRouteIdle: Deferred;

export const SIMPLE_CALLBACK = (callback: Function) => callback();
const IS_FASTBOOT = typeof (<any>window).FastBoot !== 'undefined';
const waiter = buildWaiter('ember-app-scheduler-waiter');

reset();

export function beginScheduledWork() {
  let scheduledWorkToken: Token = <Token>waiter.beginAsync();

  schedule('afterRender', null, () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        _whenRouteIdle.promise.finally(() =>
          waiter.endAsync(scheduledWorkToken)
        );
        _whenRouteIdle.resolve();
      });
    });
  });
}

export function beginTransition(): void {
  if (_whenRouteIdle.isResolved) {
    _whenRouteIdle = _defer(APP_SCHEDULER_LABEL);
  }
}

export function endTransition(): void {
  beginScheduledWork();
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
  _whenRouteIdle = _defer(APP_SCHEDULER_LABEL);

  if (!IS_FASTBOOT) {
    _whenRouteIdle.resolve();
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
  let transitionToken = waiter.beginAsync();

  return _whenRouteIdle.promise.finally(() => waiter.endAsync(transitionToken));
}

/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 */
export function whenRoutePainted(): Promise<any> {
  deprecate(
    'The `whenRoutePained` function is deprecated. Please use `whenRouteIdle` to defer work.',
    false,
    {
      id: 'ember-app-scheduler.whenRoutePainted',
      until: '4.0.0',
    }
  );

  return _whenRouteIdle.promise;
}

/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 */
export function whenRouteIdle(): Promise<any> {
  return _whenRouteIdle.promise;
}

/**
 * Used for testing
 */
export function routeSettled(): Promise<any> {
  return _whenRouteIdle.promise;
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
