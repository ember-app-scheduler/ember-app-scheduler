import { module, test } from 'qunit';
import { assign } from '@ember/polyfills';
import {
  reset,
  whenRoutePainted,
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
  _setEmitMark,
} from 'ember-app-scheduler/scheduler';

const REQUEST_ANIMATION_FRAME = requestAnimationFrame;
const REQUEST_IDLE_CALLBACK = requestIdleCallback;

module('Unit | Scheduler', function(hooks) {
  hooks.afterEach(function() {
    window.requestAnimationFrame = REQUEST_ANIMATION_FRAME;
    window.requestIdleCallback = REQUEST_IDLE_CALLBACK;
    _setCapabilities();
    reset();
  });

  [
    {
      moduleName: 'using PerformanceObserver',
      capabilities: { performanceObserverEnabled: true },
    },
    {
      moduleName: 'not using PerformanceObserver',
      capabilities: { performanceObserverEnabled: false },
    },
  ].forEach(({ moduleName, capabilities }) => {
    module(moduleName, function() {
      test('whenRoutePainted resolves when transition ended', async function(assert) {
        assert.expect(1);

        _setCapabilities(capabilities);

        beginTransition();

        let routePainted = whenRoutePainted();

        endTransition();

        await routePainted.then(() => {
          assert.ok(true);
        });

        await routeSettled();
      });

      test('whenRouteIdle resolves when transition ended', async function(assert) {
        assert.expect(1);

        _setCapabilities(capabilities);

        beginTransition();

        let routeIdle = whenRouteIdle();

        endTransition();

        await routeIdle.then(() => {
          assert.ok(true);
        });

        await routeSettled();
      });

      test('whenRoutePainted resolves when transition ended when requestAnimationFrame not available', async function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: false,
            requestIdleCallbackEnabled: false,
          })
        );

        _setEmitMark(() => {
          performance.mark('routeIdle');
        });

        window.requestAnimationFrame = callback => {
          assert.ok(false, 'requestAnimationFrame was used');
          callback();
        };
        window.requestIdleCallback = callback => {
          assert.ok(false, 'requestIdleCallback was used');
          callback();
        };

        beginTransition();

        let routePainted = whenRoutePainted();

        endTransition();

        await routePainted.then(() => {
          assert.ok(true);
        });

        _setEmitMark();

        await routeSettled();
      });

      test('whenRouteIdle resolves when transition ended when requestAnimationFrame not available', async function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: false,
            requestIdleCallbackEnabled: false,
          })
        );

        _setEmitMark(() => {
          performance.mark('routeIdle');
        });

        window.requestAnimationFrame = callback => {
          assert.ok(false, 'requestAnimationFrame was used');
          callback();
        };
        window.requestIdleCallback = callback => {
          assert.ok(false, 'requestIdleCallback was used');
          callback();
        };

        beginTransition();

        let routeIdle = whenRouteIdle();

        endTransition();

        await routeIdle.then(() => {
          assert.ok(true);
        });

        _setEmitMark();

        await routeSettled();
      });

      test('whenRoutePainted resolves using requestAnimationFrame when transition ended', async function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: true,
            requestIdleCallbackEnabled: false,
          })
        );

        _setEmitMark(() => {
          performance.mark('routeIdle');
        });

        window.requestAnimationFrame = callback => {
          assert.ok(true, 'requestAnimationFrame was used');
          callback();
        };
        window.requestIdleCallback = callback => {
          assert.ok(false, 'requestIdleCallback was used');
          callback();
        };

        beginTransition();

        let routePainted = whenRoutePainted();

        endTransition();

        await routePainted.then(() => {
          assert.ok(true);
        });

        _setEmitMark();

        await routeSettled();
      });

      test('whenRouteIdle resolves using requestAnimationFrame when transition ended', async function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: true,
            requestIdleCallbackEnabled: false,
          })
        );

        _setEmitMark(() => {
          performance.mark('routeIdle');
        });

        window.requestAnimationFrame = callback => {
          assert.ok(true, 'requestAnimationFrame was used');
          callback();
        };
        window.requestIdleCallback = callback => {
          assert.ok(false, 'requestIdleCallback was used');
          callback();
        };

        beginTransition();

        let routeIdle = whenRouteIdle();

        endTransition();

        await routeIdle.then(() => {
          assert.ok(true);
        });

        _setEmitMark();

        await routeSettled();
      });

      test('whenRoutePainted with transition interupted', async function(assert) {
        assert.expect(3);

        _setCapabilities(capabilities);

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

        assert.verifySteps([
          'first whenRoutePainted',
          'second whenRoutePainted',
        ]);
      });

      test('whenRouteIdle with transition interupted', async function(assert) {
        assert.expect(3);

        _setCapabilities(capabilities);

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

      test('_getScheduleFn falls back to requestAnimationFrame if requestIdleCallbackEnabled: not available', function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: true,
            requestIdleCallbackEnabled: false,
          })
        );
        assert.equal(
          _getScheduleFn(USE_REQUEST_IDLE_CALLBACK),
          requestAnimationFrame
        );
      });

      test('_getScheduleFn returns simple callback if requestAnimationFrame not available', function(assert) {
        assert.expect(1);

        _setCapabilities(
          assign(capabilities, {
            requestAnimationFrameEnabled: false,
            requestIdleCallbackEnabled: false,
          })
        );

        assert.equal(_getScheduleFn(), SIMPLE_CALLBACK);
      });
    });
  });
});
