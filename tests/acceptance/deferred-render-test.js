import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, find } from '@ember/test-helpers';

module('Acceptance | deferred render', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.scheduler = this.owner.lookup('service:scheduler');
    this.router = this.owner.lookup('router:main');
  });

  test('visiting /demo', async function(assert) {
    assert.expect(3);
    let done = assert.async();

    this.router.on('didTransition', () => {
      this.scheduler.queues['afterFirstRoutePaint'].afterPaintPromise.then(() => {
        const deferredElement = find('.deferred-container ul');
        assert.isVisible(deferredElement, 'Deferred content should be visible.');
        const adElement = find('.ad-container h3');
        assert.isNotVisible(adElement, 'Ad should not be visible.');
      });

      this.scheduler.queues['afterContentPaint'].afterPaintPromise.then(() => {
        const adElement = find('.ad-container h3');
        assert.isVisible(adElement, 'Ad should be visible.');
        done();
      });
    });

    await visit('/demo');
  });

  test('visiting /demo when requestAnimationFrame is not present', async function(assert) {
    this.scheduler._useRAF = false;
    assert.expect(3);
    let done = assert.async();

    this.router.on('didTransition', () => {
      this.scheduler.queues['afterFirstRoutePaint'].afterPaintPromise.then(() => {
        const deferredElement = find('.deferred-container ul');
        assert.isVisible(deferredElement, 'Deferred content should be visible.');
        const adElement = find('.ad-container h3');
        assert.isNotVisible(adElement, 'Ad should not be visible.');
      });

      this.scheduler.queues['afterContentPaint'].afterPaintPromise.then(() => {
        const adElement = find('.ad-container h3');
        assert.isVisible(adElement, 'Ad should be visible.');
        this.scheduler._useRAF = true;
        done();
      });
    });

    await visit('/demo');
  });
});
