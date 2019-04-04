import {
  beginTransition,
  endTransition,
  reset,
  routeSettled,
  whenRouteIdle,
} from 'ember-app-scheduler';
import {
  SIMPLE_CALLBACK,
  USE_REQUEST_IDLE_CALLBACK,
  _getScheduleFn,
  _getWhenRouteIdleScheduleFn,
  _getWhenRoutePaintedScheduleFn,
  _setCapabilities,
} from 'ember-app-scheduler/scheduler';
import { module, test } from 'qunit';

const REQUEST_ANIMATION_FRAME = requestAnimationFrame;

module('Unit | Scheduler', function(hooks) {
  hooks.beforeEach(function() {
    _setCapabilities({
      requestAnimationFrameEnabled: typeof requestAnimationFrame === 'function',
      requestIdleCallbackEnabled: typeof requestIdleCallback === 'function',
    });
  });

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

    window.requestAnimationFrame = cb => {
      assert.ok(false, 'requestAnimationFrame was used');
      cb();
    };

    beginTransition();

    let routeIdle = whenRouteIdle();

    endTransition();

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRouteIdle resolves using requestAnimationFrame when transition ended when requestIdleCallbackEnabled: not available', async function(assert) {
    assert.expect(3);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: false,
    });

    window.requestAnimationFrame = cb => {
      assert.ok(true, 'requestAnimationFrame was used');
      cb();
    };

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

  test('route idle and route painted schedule functions are correct', function(assert) {
    assert.expect(2);

    assert.equal(_getWhenRouteIdleScheduleFn(), requestIdleCallback);
    assert.equal(_getWhenRoutePaintedScheduleFn(), requestAnimationFrame);
  });

  test('_setCapabilities correctly updates idle / route painted schedule functions', function(assert) {
    assert.expect(4);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: false,
    });

    assert.equal(_getWhenRoutePaintedScheduleFn(), requestAnimationFrame);
    assert.equal(_getWhenRouteIdleScheduleFn(), requestAnimationFrame);

    _setCapabilities({
      requestAnimationFrameEnabled: false,
      requestIdleCallbackEnabled: false,
    });

    assert.equal(_getWhenRoutePaintedScheduleFn(), SIMPLE_CALLBACK);
    assert.equal(_getWhenRouteIdleScheduleFn(), SIMPLE_CALLBACK);
  });

  test('_setCapabilities by default disables requestIdleCallback in tests', function(assert) {
    assert.expect(2);

    _setCapabilities();

    assert.equal(_getWhenRouteIdleScheduleFn(), requestAnimationFrame);
    assert.equal(_getWhenRoutePaintedScheduleFn(), requestAnimationFrame);
  });
});
