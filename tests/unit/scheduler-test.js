import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
} from 'ember-app-scheduler';
import {
  useRequestAnimationFrame,
  useRequestIdleCallback,
  getScheduleFn,
  SCHEDULE_TYPE,
  SIMPLE_CALLBACK,
} from 'ember-app-scheduler/scheduler';

const REQUEST_ANIMATION_FRAME = requestAnimationFrame;

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
    useRequestAnimationFrame();
    useRequestIdleCallback();
    window.requestAnimationFrame = REQUEST_ANIMATION_FRAME;
  });

  test('whenRouteIdle resolves when transition ended', async function(assert) {
    assert.expect(1);

    beginTransition();

    let routeIdle = whenRouteIdle();

    endTransition();

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRouteIdle resolves when transition ended when requestAnimationFrame not available', async function(assert) {
    assert.expect(1);

    useRequestAnimationFrame(false);
    window.requestAnimationFrame = () =>
      assert.ok(false, 'requestAnimationFrame was used');
    beginTransition();

    let routeIdle = whenRouteIdle();

    endTransition();

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRouteIdle with transition interupted', async function(assert) {
    assert.expect(3);

    beginTransition();

    whenRouteIdle().then(() => {
      assert.step('first whenRouteIdle');
    });

    beginTransition();

    whenRouteIdle().then(() => {
      assert.step('second whenRouteIdle');
    });

    endTransition();

    await routeSettled();

    assert.verifySteps(['first whenRouteIdle', 'second whenRouteIdle']);
  });

  test('getScheduleFn returns correct scheduleFn for requestIdleCallback', function(assert) {
    assert.equal(getScheduleFn(SCHEDULE_TYPE.RIC), requestIdleCallback);
  });

  test('getScheduleFn falls back to requestAnimationFrame if requestIdleCallback not available', function(assert) {
    useRequestIdleCallback(false);

    assert.equal(getScheduleFn(SCHEDULE_TYPE.RIC), requestAnimationFrame);
  });

  test('getScheduleFn returns simple callback if requestAnimationFrame not available', function(assert) {
    useRequestIdleCallback(false);
    useRequestAnimationFrame(false);

    assert.equal(getScheduleFn(), SIMPLE_CALLBACK);
  });
});
