import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupRouter, reset, routeSettled } from 'ember-app-scheduler';

module('Acceptance | when rendered tests', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');

    setupRouter(this.router);
  });

  hooks.afterEach(function() {
    reset();
  });

  test('visiting route renders deferred content via whenRoutePainted', async function(assert) {
    assert.expect(2);

    await visit('/first-paint');

    assert.equal(currentRouteName(), 'first-paint');
    assert.dom('.only-when-route-painted').exists();

    await routeSettled();
  });

  test('visiting route renders deferred content via whenRouteIdle', async function(assert) {
    assert.expect(2);

    await visit('/content-paint');

    assert.equal(currentRouteName(), 'content-paint');
    assert.dom('.only-when-route-idle').exists();

    await routeSettled();
  });

  test('visiting a route and immediately transitioning correctly aborts current transition', async function(assert) {
    assert.expect(2);

    await visit('/aborted-paint');

    assert.equal(currentRouteName(), 'first-paint');
    assert.dom('.only-when-route-painted').exists();

    await routeSettled();
  });
});
