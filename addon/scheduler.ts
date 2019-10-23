import Ember from 'ember';
import { Promise } from 'rsvp';
import { run, schedule } from '@ember/runloop';
import { assign } from '@ember/polyfills';
import Router from '@ember/routing/router';
import { DEBUG } from '@glimmer/env';
import { gte } from 'ember-compatibility-helpers';
import { buildWaiter, Token } from 'ember-test-waiters';

interface Deferred {
  isResolved: boolean;
  promise: Promise<any>;
  resolve: Function;
  reject: Function;
}

interface SchedulerOptions {
  markName: string;
  emitMark: boolean;
}

interface Capabilities {
  requestAnimationFrameEnabled: boolean;
  requestIdleCallbackEnabled: boolean;
  performanceObserverEnabled: boolean;
}

const APP_SCHEDULER_LABEL: string = 'ember-app-scheduler';
const APP_SCHEDULER_HAS_SETUP: string = '__APP_SCHEDULER_HAS_SETUP__';
let PERFORMANCE_OBSERVER_SETUP: boolean = false;

let _whenRouteDidChange: Deferred;
let _whenRoutePainted: Promise<any>;
let _whenRoutePaintedScheduleFn: Function;
let _whenRouteIdle: Promise<any>;
let _whenRouteIdleScheduleFn: Function;
const CAPABILITIES: Capabilities = {
  requestAnimationFrameEnabled: typeof requestAnimationFrame === 'function',
  requestIdleCallbackEnabled: typeof requestIdleCallback === 'function',
  performanceObserverEnabled: typeof PerformanceObserver === 'function',
};
const DEFAULT_OPTIONS: SchedulerOptions = {
  markName: 'routeIdle',
  emitMark: true,
};

let _capabilities = CAPABILITIES;
let schedulerOptions: SchedulerOptions = DEFAULT_OPTIONS;

export const USE_REQUEST_IDLE_CALLBACK: boolean = true;
export const SIMPLE_CALLBACK = (callback: Function) => callback();
const IS_FASTBOOT = typeof (<any>window).FastBoot !== 'undefined';
const waiter = buildWaiter('ember-app-scheduler-waiter');
let _emitMark: Function = emitMark;

reset();

function installObserver() {
  if (PERFORMANCE_OBSERVER_SETUP) {
    return;
  }

  let observer = new PerformanceObserver(list => {
    let entries = list.getEntriesByName(schedulerOptions.markName);

    if (entries.length > 0) {
      _whenRouteDidChange.resolve();
    }
  });
  observer.observe({ entryTypes: ['mark'] });

  PERFORMANCE_OBSERVER_SETUP = true;
}

export function emitMark() {
  let emitMarkToken: Token = <Token>waiter.beginAsync();

  schedule('afterRender', null, () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        performance.mark(schedulerOptions.markName);
        _whenRouteDidChange.promise.finally(() =>
          waiter.endAsync(emitMarkToken)
        );
      });
    });
  });
}

export function beginTransition(): void {
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
  if (CAPABILITIES.performanceObserverEnabled) {
    if (!schedulerOptions.emitMark) {
      return;
    }

    _emitMark();
  } else {
    _whenRouteDidChange.resolve();
  }
}

export function setupRouter(router: Router, options: SchedulerOptions): void {
  if (IS_FASTBOOT || (router as any)[APP_SCHEDULER_HAS_SETUP]) {
    return;
  }

  (router as any)[APP_SCHEDULER_HAS_SETUP] = true;

  if (CAPABILITIES.performanceObserverEnabled) {
    schedulerOptions = assign(DEFAULT_OPTIONS, options);

    installObserver();
  }

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
  _capabilities = assign({}, _capabilities, newCapabilities);
  _whenRoutePaintedScheduleFn = _getScheduleFn();
  _whenRouteIdleScheduleFn = _getScheduleFn(USE_REQUEST_IDLE_CALLBACK);
}

export function _setEmitMark(overrideEmitMark: Function = emitMark) {
  _emitMark = overrideEmitMark;
}

_whenRoutePaintedScheduleFn = _getScheduleFn();
_whenRouteIdleScheduleFn = _getScheduleFn(USE_REQUEST_IDLE_CALLBACK);

function _afterNextPaint(scheduleFn: Function): Promise<any> {
  let nextPaintToken = waiter.beginAsync();

  return new Promise(resolve => {
    scheduleFn(() => {
      run.later(resolve, 0);
    });
  }).finally(() => {
    waiter.endAsync(nextPaintToken);
  });
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
