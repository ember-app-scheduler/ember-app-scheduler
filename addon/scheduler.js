import RSVP from 'rsvp';
import { run } from '@ember/runloop';
import { DEBUG } from '@glimmer/env';
import { registerWaiter } from '@ember/test';

let _didTransition;
let _whenRoutePainted;
let _whenRouteIdle;

reset();

export const TRANSITION_INTERUPTED = 'TRANSITION INTERUPTED';

export function beginTransition() {
  _checkForPriorTransition();

  _didTransition = _defer();
  _whenRoutePainted = _didTransition.promise.then(_afterNextPaint);
  _whenRouteIdle = _whenRoutePainted.then(_afterNextPaint);
}

export function endTransition() {
  _didTransition.resolve();
}

export function setupRouter(router) {
  router.on('willTransition', beginTransition);
  router.on('didTransition', endTransition);
}

export function reset() {
  _didTransition = _defer();
  _whenRoutePainted = _didTransition.promise.then();
  _whenRouteIdle = _whenRoutePainted.then();
  _didTransition.resolve();
  _activeRAFs = 0;
}

/**
 * Top level promise that represents the entry point for deferred work.
 * Subsequent promises are chained off this promise, successively composing
 * them together to approximate when painting has occurred.
 *
 * @public
 */
export function didTransition() {
  return _didTransition.promise;
}

/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 */
export function whenRoutePainted() {
  return _whenRoutePainted;
}

/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 */
export function whenRouteIdle() {
  return _whenRouteIdle;
}

/**
 * Used for testing
 */
export function routeSettled() {
  return _whenRouteIdle;
}

export function useRAF(rAFEnabled) {
  let useRAF = typeof requestAnimationFrame === 'function';

  if (DEBUG) {
    useRAF = rAFEnabled ? rAFEnabled : useRAF;
  }

  return useRAF;
}

function _checkForPriorTransition() {
  if (!_didTransition.isResolved) {
    let error = new Error(TRANSITION_INTERUPTED);
    error.code = TRANSITION_INTERUPTED;

    _didTransition.reject(error);
  }
}

let _activeRAFs = 0;
function _afterNextPaint() {
  let promise = new RSVP.Promise(resolve => {
    if (DEBUG) {
      _activeRAFs++;
    }

    if (useRAF()) {
      requestAnimationFrame(() => {
        run.later(resolve, 0);
      });
    } else {
      run.later(resolve, 0);
    }
  });

  if (DEBUG) {
    promise = promise.finally(() => {
      _activeRAFs--;
    });
  }

  return promise;
}

if (DEBUG) {
  // wait until no active rafs
  registerWaiter(() => _activeRAFs === 0);
}

function _defer(label) {
  let deferred = { resolve: undefined, reject: undefined };

  deferred.isResolved = false;
  deferred.promise = new RSVP.Promise((resolve, reject) => {
    deferred.resolve = () => {
      deferred.isResolved = true;
      return resolve();
    };
    deferred.reject = reject;
  }, label);

  return deferred;
}
