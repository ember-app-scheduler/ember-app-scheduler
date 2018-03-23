import RSVP from 'rsvp';
import { run } from '@ember/runloop';
import { DEBUG } from '@glimmer/env';
import { registerWaiter } from '@ember/test';

const USE_RAF = typeof requestAnimationFrame === 'function';
let _didTransition;
let _afterFirstRoutePaint;
let _afterContentPaint;

reset();

export const TRANSITION_INTERUPTED = 'TRANSITION INTERUPTED';

export function beginTransition() {
  _checkForPriorTransition();

  _didTransition = RSVP.defer();
  _didTransition.isResolved = false;
  _afterFirstRoutePaint = _didTransition.promise.then(() => afterNextPaint());
  _afterContentPaint = _afterFirstRoutePaint.then(() => afterNextPaint());
}

export function endTransition() {
  _didTransition.resolve();
  _didTransition.isResolved = true;
}

export function setupRouter(router) {
  router.on('willTransition', beginTransition);
  router.on('didTransition', endTransition);
}

export function reset() {
  _didTransition = RSVP.defer();
  _afterFirstRoutePaint = _didTransition.promise.then(() => {});
  _afterContentPaint = _afterFirstRoutePaint.then(() => {});
  _didTransition.resolve();
  _didTransition.isResolved = true;
  _activeRAFs = 0;
}

/**
 * Top level promise that represents the entry point for deferred work.
 * Subsequent promises are chained off this promise, successively composing
 * them together to approximate when painting has occurred.
 */
export function didTransition() {
  return _didTransition.promise;
}

/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 */
export function afterFirstRoutePaint() {
  return _afterFirstRoutePaint;
}

/**
 * This promise, when resolved, approximates after content is painted.
 */
export function afterContentPaint() {
  return _afterContentPaint;
}

function _checkForPriorTransition() {
  if (!_didTransition.isResolved) {
    _didTransition.reject(TRANSITION_INTERUPTED);
  }
}

let _activeRAFs = 0;
function afterNextPaint() {
  let promise = new RSVP.Promise(resolve => {
    if (DEBUG) {
      _activeRAFs++;
    }

    if (USE_RAF) {
      requestAnimationFrame(() => {
        run.later(resolve, 0);
      });
    } else {
      run.later(resolve, 0);
    }
  });

  if (DEBUG) {
    promise.finally(() => {
      _activeRAFs--;
    });
  }

  return promise;
}

if (DEBUG) {
  // wait until no active rafs
  registerWaiter(() => _activeRAFs === 0);
}
