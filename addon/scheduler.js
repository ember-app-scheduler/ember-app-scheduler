import RSVP from 'rsvp';
import { run } from '@ember/runloop';

const USE_RAF = typeof requestAnimationFrame === 'function';
let _didTransition;
let _afterFirstRoutePaint;
let _afterContentPaint;

reset();

export function beginTransition() {
  _didTransition = RSVP.defer();
  _afterFirstRoutePaint = _didTransition.promise.then(() => afterNextPaint());
  _afterContentPaint = _afterFirstRoutePaint.then(() => afterNextPaint());
}

export function endTransition() {
  _didTransition.resolve();
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

function afterNextPaint() {
  return new RSVP.Promise(resolve => {
    if (USE_RAF) {
      requestAnimationFrame(() => {
        run.later(resolve, 0);
      });
    } else {
      run.later(resolve, 0);
    }
  });
}
