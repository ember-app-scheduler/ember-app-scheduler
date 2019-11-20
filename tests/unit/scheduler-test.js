import { module, test } from 'qunit';
import {
  reset,
  whenRouteIdle,
  routeSettled,
  beginTransition,
  endTransition,
} from 'ember-app-scheduler';
import { _setCapabilities } from 'ember-app-scheduler/scheduler';

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    _setCapabilities();
    reset();
  });

  module('using requestAnimationFrame', function() {
    test('whenRouteIdle resolves when transition ended', async function(assert) {
      assert.expect(1);

      _setCapabilities({ requestAnimationFrameEnabled: true });

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

      _setCapabilities({ requestAnimationFrameEnabled: true });

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

  module('not using requestAnimationFrame', function() {
    test('whenRouteIdle resolves when transition ended', async function(assert) {
      assert.expect(1);

      _setCapabilities({ requestAnimationFrameEnabled: false });

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

      _setCapabilities({ requestAnimationFrameEnabled: false });

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
});
