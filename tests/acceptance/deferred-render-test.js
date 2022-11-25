import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  visit,
  currentRouteName,
  click,
  settled,
  waitFor,
} from '@ember/test-helpers';
import {
  beginTransition,
  endTransition,
  setupRouter,
} from 'ember-app-scheduler';

['router:main', 'service:router'].forEach((dependencyKey) => {
  module(
    `Acceptance | when rendered tests with ${dependencyKey}`,
    function (hooks) {
      setupApplicationTest(hooks);

      hooks.beforeEach(function () {
        this.router = this.owner.lookup(dependencyKey);

        setupRouter(this.router);
      });

      test('visiting route renders deferred content via whenRouteIdle', async function (assert) {
        assert.expect(2);

        await visit('/content-paint');

        assert.strictEqual(currentRouteName(), 'content-paint');
        assert.dom('.only-when-route-idle').exists();
      });

      test('visiting a route and immediately transitioning correctly aborts current transition', async function (assert) {
        assert.expect(2);

        await visit('/aborted-paint');

        assert.strictEqual(currentRouteName(), 'content-paint');
        assert.dom('.only-when-route-idle').exists();
      });

      test('visiting route and transitioning to another renders deferred content via whenRouteIdle', async function (assert) {
        assert.expect(2);

        await visit('/content-paint');

        await click('a');

        assert.strictEqual(currentRouteName(), 'content-paint');
        assert.dom('.only-when-route-idle').exists();
      });

      module('Helper | route-idle', function () {
        test('visiting route renders deferred content via route-idle helper', async function (assert) {
          assert.expect(3);

          await visit('/route-idle-helper');

          beginTransition();
          await waitFor('.only-when-route-not-idle');
          assert.dom('.only-when-route-not-idle').exists();
          endTransition();
          await settled();

          assert.strictEqual(currentRouteName(), 'route-idle-helper');

          await waitFor('.only-when-route-idle');

          assert.dom('.only-when-route-idle').exists();
        });

        test('visiting route and refresh renders deferred content via route-idle helper', async function (assert) {
          assert.expect(5);

          const controller = this.owner.lookup('controller:route-idle-helper');

          await visit('/route-idle-helper');

          await waitFor('.only-when-route-idle');
          assert.dom('.only-when-route-idle').exists();

          assert.strictEqual(controller.refresh, 0);

          await click('.refresh-button');
          assert.strictEqual(currentRouteName(), 'route-idle-helper');

          assert.strictEqual(controller.refresh, 1);

          await waitFor('.only-when-route-idle');
          assert.dom('.only-when-route-idle').exists();
        });
      });
    }
  );
});
