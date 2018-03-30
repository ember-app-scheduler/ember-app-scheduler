import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
  TRANSITION_INTERUPTED,
} from 'ember-app-scheduler';
import { useRAF } from 'ember-app-scheduler/scheduler';

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
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

    useRAF(false);
    beginTransition();

    let routeIdle = whenRouteIdle();

    endTransition();

    await routeIdle.then(() => {
      assert.ok(true);
    });

    await routeSettled();

    useRAF(null);
  });

  test('whenRouteIdle with transition interuped', async function(assert) {
    assert.expect(1);

    beginTransition();

    try {
      let routeIdle = whenRouteIdle();
      beginTransition();
      await routeIdle;
    } catch (reason) {
      assert.equal(reason.code, TRANSITION_INTERUPTED);
    }

    endTransition();

    await routeSettled();
  });
});
