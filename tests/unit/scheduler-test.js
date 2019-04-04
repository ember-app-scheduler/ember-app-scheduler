import {
  beginTransition,
  endTransition,
  reset,
  routeSettled,
  whenRouteIdle,
  whenRoutePainted,
} from 'ember-app-scheduler';
import {
  SIMPLE_CALLBACK,
  USE_REQUEST_IDLE_CALLBACK,
  _getScheduleFn,
  _setCapabilities,
} from 'ember-app-scheduler/scheduler';
import { module, test } from 'qunit';

const REQUEST_ANIMATION_FRAME = requestAnimationFrame;
const REQUEST_IDLE_CALLBACK = requestIdleCallback;

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
    window.requestIdleCallback = REQUEST_IDLE_CALLBACK;
  });

  test('whenRouteIdle resolves when transition ended', async function(assert) {
    assert.expect(1);

    beginTransition();

    const routeIdle = whenRouteIdle();

    endTransition();

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRoutePainted, whenRouteIdle resolve when transition ends when requestAnimationFrame not available', async function(assert) {
    assert.expect(2);

    _setCapabilities({
      requestAnimationFrameEnabled: false,
      requestIdleCallbackEnabled: false,
    });

    window.requestAnimationFrame = cb => {
      assert.ok(false, 'requestAnimationFrame was used');
      cb();
    };

    window.requestIdleCallback = cb => {
      assert.ok(false, 'requestIdleCallback was used');
      cb();
    };

    beginTransition();

    const routePainted = whenRoutePainted();
    const routeIdle = whenRouteIdle();

    endTransition();

    await routePainted.then(() => {
      assert.ok(true);
    });

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRoutePainted, whenRouteIdle resolves using requestAnimationFrame when transition ends when requestIdleCallbackEnabled: not available', async function(assert) {
    assert.expect(3);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: false,
    });

    let count = 1;

    window.requestAnimationFrame = cb => {
      assert.step(`requestAnimationFrame was used: ${count++}`);
      cb();
    };

    window.requestIdleCallback = cb => {
      assert.ok(false, 'requestIdleCallback was used');
      cb();
    };

    beginTransition();

    const routePainted = whenRoutePainted();
    const routeIdle = whenRouteIdle();

    endTransition();

    await routePainted;
    await routeIdle;
    await routeSettled();

    assert.verifySteps([
      'requestAnimationFrame was used: 1',
      'requestAnimationFrame was used: 2',
    ]);
  });

  test('whenRoutePainted resolves using requestAnimationFrame and whenRouteIdle resolves using requestIdleCallback', async function(assert) {
    assert.expect(3);

    _setCapabilities({
      requestAnimationFrameEnabled: true,
      requestIdleCallbackEnabled: true,
    });

    window.requestAnimationFrame = cb => {
      assert.step('requestAnimationFrame was used');
      cb();
    };

    window.requestIdleCallback = cb => {
      assert.step('requestIdleCallback was used');
      cb();
    };

    beginTransition();

    const routePainted = whenRoutePainted();
    const routeIdle = whenRouteIdle();

    endTransition();

    await routePainted;
    await routeIdle;
    await routeSettled();

    assert.verifySteps([
      'requestAnimationFrame was used',
      'requestIdleCallback was used',
    ]);
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
