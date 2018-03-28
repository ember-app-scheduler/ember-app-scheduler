import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
  TRANSITION_INTERUPTED,
} from 'ember-app-scheduler';

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    reset();
  });

  test('whenRoutePainted with transition interuped', async function(assert) {
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
