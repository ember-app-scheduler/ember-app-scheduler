import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentRouteName, click } from '@ember/test-helpers';
import { setupRouter } from 'ember-app-scheduler';

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
    }
  );
});
