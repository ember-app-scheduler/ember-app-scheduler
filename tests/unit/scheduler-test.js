import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
} from 'ember-app-scheduler';
import {
  _setCapabilities,
  _getScheduleFn,
  USE_REQUEST_IDLE_CALLBACK,
  SIMPLE_CALLBACK,
} from 'ember-app-scheduler/scheduler';

const REQUEST_ANIMATION_FRAME = requestAnimationFrame;

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
    _setCapabilities();
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

    _setCapabilities({
      requestAnimationFrameEnabled: false,
      requestIdleCallbackEnabled: false,
    });
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

  test('whenRouteIdle resolves using requestAnimationFrame when transition ended when requestIdleCallbackEnabled: not available', async function(assert) {
    assert.expect(1);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: false,
    });
    window.requestAnimationFrame = () =>
      assert.ok(true, 'requestAnimationFrame was used');
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

  test('_getScheduleFn returns correct scheduleFn for requestIdleCallbackEnabled:', function(assert) {
    assert.expect(1);

    assert.equal(
      _getScheduleFn(USE_REQUEST_IDLE_CALLBACK),
      requestIdleCallback
    );
  });

  test('_getScheduleFn falls back to requestAnimationFrame if requestIdleCallbackEnabled: not available', function(assert) {
    assert.expect(1);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: false,
    });
    assert.equal(
      _getScheduleFn(USE_REQUEST_IDLE_CALLBACK),
      requestAnimationFrame
    );
  });

  test('_getScheduleFn returns simple callback if requestAnimationFrame not available', function(assert) {
    assert.expect(1);

    _setCapabilities({
      requestAnimationFrameEnabled: false,
      requestIdleCallbackEnabled: false,
    });

    assert.equal(_getScheduleFn(), SIMPLE_CALLBACK);
  });
});
