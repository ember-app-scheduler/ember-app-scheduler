import { module, test } from 'qunit';
import {
  reset,
  whenRoutePainted,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
} from 'ember-app-scheduler';

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
  });

  test('whenRoutePainted resolves when transition ended', async function(assert) {
    assert.expect(1);

    beginTransition();

    let routePainted = whenRoutePainted();

    endTransition();

    await routePainted.then(() => {
      assert.ok(true);
    });

    await routeSettled();
  });

  test('whenRoutePainted with transition interupted', async function(assert) {
    assert.expect(3);

    beginTransition();

    whenRoutePainted().then(() => {
      assert.step('first whenRoutePainted');
    });

    beginTransition();

    whenRoutePainted().then(() => {
      assert.step('second whenRoutePainted');
    });

    endTransition();

    await routeSettled();

    assert.verifySteps(['first whenRoutePainted', 'second whenRoutePainted']);
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
});
