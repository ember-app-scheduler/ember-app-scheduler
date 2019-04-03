import Router from '@ember/routing/router';
import { run } from '@ember/runloop';
import { registerWaiter } from '@ember/test';
import { DEBUG } from '@glimmer/env';
import Ember from 'ember';
import { gte } from 'ember-compatibility-helpers';
import { Promise } from 'rsvp';

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
let _activeScheduledTasks: number = 0;
let _capabilities: Capabilities | undefined;

export const USE_REQUEST_IDLE_CALLBACK: boolean = true;
export const SIMPLE_CALLBACK = (callback: Function) => callback();

reset();

function getDefaultCapabilities(): Capabilities {
  return {
    requestAnimationFrameEnabled: typeof requestAnimationFrame === 'function',
    requestIdleCallbackEnabled: Ember.testing
      ? false
      : typeof requestIdleCallback === 'function',
  };
}

function getCapabilities(): Capabilities {
  return _capabilities || getDefaultCapabilities();
}

export function beginTransition(): void {
  _initScheduleFns();

  if (_whenRouteDidChange.isResolved) {
    _whenRouteDidChange = _defer(APP_SCHEDULER_LABEL);
    _whenRoutePainted = _whenRouteDidChange.promise.then(() =>
      _afterNextPaint(_whenRoutePaintedScheduleFn)
    );
    _whenRouteIdle = _whenRoutePainted.then(() =>
      _afterNextPaint(_whenRouteIdleScheduleFn)
    );
  }
}

export function endTransition(): void {
  _whenRouteDidChange.resolve();
}

export function setupRouter(router: Router): void {
  if ((router as any)[APP_SCHEDULER_HAS_SETUP]) {
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
  _whenRouteDidChange.resolve();
  _activeScheduledTasks = 0;
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
  const {
    requestIdleCallbackEnabled,
    requestAnimationFrameEnabled,
  } = getCapabilities();

  if (useRequestIdleCallback && requestIdleCallbackEnabled) {
    return requestIdleCallback;
  } else if (requestAnimationFrameEnabled) {
    return requestAnimationFrame;
  } else {
    return SIMPLE_CALLBACK;
  }
}

export function _setCapabilities(
  newCapabilities = getDefaultCapabilities()
): void {
  _capabilities = newCapabilities;
  _initScheduleFns();
}

export function _getWhenRoutePaintedScheduleFn(): Function {
  return _whenRoutePaintedScheduleFn;
}

export function _getWhenRouteIdleScheduleFn(): Function {
  return _whenRouteIdleScheduleFn;
}

function _initScheduleFns(): void {
  _whenRoutePaintedScheduleFn = _getScheduleFn();
  _whenRouteIdleScheduleFn = _getScheduleFn(USE_REQUEST_IDLE_CALLBACK);
}

function _afterNextPaint(scheduleFn: Function): Promise<any> {
  let promise = new Promise(resolve => {
    if (DEBUG) {
      _activeScheduledTasks++;
    }

    scheduleFn(() => {
      run.later(resolve, 0);
    });
  });

  if (DEBUG) {
    promise = promise.finally(() => {
      _activeScheduledTasks--;
    });
  }

  return promise;
}

if (DEBUG) {
  // wait until no active rafs
  registerWaiter(() => _activeScheduledTasks === 0);
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
