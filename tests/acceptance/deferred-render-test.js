import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import { setupRouter, reset } from 'ember-app-scheduler';

module('Acceptance | deferred render', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');

    setupRouter(this.router);
  });

  hooks.afterEach(function() {
    reset();
  });

  test('visiting route renders deferred content via whenRoutePainted', async function(assert) {
    assert.expect(0);

    await visit('/first-paint');
  });

  test('visiting route renders deferred content via whenRouteIdle', async function(assert) {
    assert.expect(0);

    await visit('/content-paint');
  });

  test('visiting a route and immediately transitioning correctly aborts current transition', async function(assert) {
    assert.expect(0);

    await visit('/aborted-paint');
  });
});
