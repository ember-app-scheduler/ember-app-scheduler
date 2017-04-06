import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | deferred render', {
  beforeEach() {
    this.scheduler = this.application.__container__.lookup('service:scheduler');
    this.router = this.application.__container__.lookup('router:main');
  },
});

test('visiting /demo', function(assert) {
  assert.expect(3);
  let done = assert.async();

  this.router.on('didTransition', () => {
    this.scheduler.queues['afterFirstRoutePaint'].afterPaintPromise.then(() => {
      const deferredElement = find('.deferred-container ul');
      assert.ok(deferredElement.is(':visible'), 'Deferred content should be visible.');
      const adElement = find('.ad-container h3');
      assert.notOk(adElement.is(':visible'), 'Ad should not be visible.');
    });

    this.scheduler.queues['afterContentPaint'].afterPaintPromise.then(() => {
      const adElement = find('.ad-container h3');
      assert.ok(adElement.is(':visible'), 'Ad should be visible.');
      done();
    });
  });

  visit('/demo');
});

test('visiting /demo when requestAnimationFrame is not present', function(assert) {
  let rAF = window.requestAnimationFrame;
  window.requestAnimationFrame = undefined;
  assert.expect(3);
  let done = assert.async();

  this.router.on('didTransition', () => {
    this.scheduler.queues['afterFirstRoutePaint'].afterPaintPromise.then(() => {
      const deferredElement = find('.deferred-container ul');
      assert.ok(deferredElement.is(':visible'), 'Deferred content should be visible.');
      const adElement = find('.ad-container h3');
      assert.notOk(adElement.is(':visible'), 'Ad should not be visible.');
    });

    this.scheduler.queues['afterContentPaint'].afterPaintPromise.then(() => {
      const adElement = find('.ad-container h3');
      assert.ok(adElement.is(':visible'), 'Ad should be visible.');
      window.requestAnimationFrame = rAF;
      done();
    });
  });

  visit('/demo');
});
