import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
} from 'ember-app-scheduler';
import {
  _getScheduleFn,
  USE_REQUEST_IDLE_CALLBACK,
  SIMPLE_CALLBACK,
} from 'ember-app-scheduler/scheduler';
import Capabilities, { DISABLED } from 'ember-app-scheduler/capabilities';

const CAPABILITIES = Capabilities.instance;
const REQUEST_ANIMATION_FRAME = requestAnimationFrame;

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
    CAPABILITIES.reset();
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

    CAPABILITIES.overrideCapability('requestAnimationFrame', DISABLED);
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

  test('whenRouteIdle resolves using requestAnimationFrame when transition ended when requestIdleCallback not available', async function(assert) {
    assert.expect(1);

    CAPABILITIES.overrideCapability('requestIdleCallback', DISABLED);
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

  test('_getScheduleFn returns correct scheduleFn for requestIdleCallback', function(assert) {
    assert.equal(
      _getScheduleFn(USE_REQUEST_IDLE_CALLBACK),
      requestIdleCallback
    );
  });

  test('_getScheduleFn falls back to requestAnimationFrame if requestIdleCallback not available', function(assert) {
    CAPABILITIES.overrideCapability('requestIdleCallback', DISABLED);

    assert.equal(
      _getScheduleFn(USE_REQUEST_IDLE_CALLBACK),
      requestAnimationFrame
    );
  });

  test('_getScheduleFn returns simple callback if requestAnimationFrame not available', function(assert) {
    CAPABILITIES.overrideCapability('requestAnimationFrame', DISABLED);
    CAPABILITIES.overrideCapability('requestIdleCallback', DISABLED);

    assert.equal(_getScheduleFn(), SIMPLE_CALLBACK);
  });
});
