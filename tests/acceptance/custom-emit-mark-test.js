import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupRouter, reset } from 'ember-app-scheduler';

module('Acceptance | when using custom emitMark tests', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');
    // DO NOT DO THIS! This is only necessary to test the app scheduler's router
    // setup in conjunction with ember-cli-addon-docs' router setup.
    this.router['__APP_SCHEDULER_HAS_SETUP__'] = false;

    setupRouter(this.router, { emitMark: false });
  });

  hooks.afterEach(function() {
    this.router['__APP_SCHEDULER_HAS_SETUP__'] = false;

    setupRouter(this.router, { emitMark: true });

    reset();
  });

  test('visiting route renders deferred content when using custom emitMark invocation', async function(assert) {
    assert.expect(2);

    await visit('/custom-emit-mark');

    assert.equal(currentRouteName(), 'custom-emit-mark');
    assert.dom('.only-after-custom-emit-marks').exists();
  });
});
