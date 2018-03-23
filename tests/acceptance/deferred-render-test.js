import { module } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupRouter, reset } from 'ember-app-scheduler';

module('Acceptance | deferred render', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');

    setupRouter(this.router);
  });

  hooks.afterEach(() => {
    reset();
  });
});
