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
    console.log('beginning first transition');

    whenRoutePainted().then(() => {
      assert.step('first whenRoutePainted');
      console.log('in whenRoutePainted().then() #1');
    });

    beginTransition();
    console.log('beginning second transition');

    whenRoutePainted().then(() => {
      assert.step('second whenRoutePainted');
      console.log('in whenRoutePainted().then() #2');
    });

    endTransition();
    console.log('ending transition');

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
