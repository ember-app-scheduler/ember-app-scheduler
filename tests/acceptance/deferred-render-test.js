import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | deferred render', {
  beforeEach() {
    this.scheduler = this.application.__container__.lookup('service:scheduler');
    this.router = this.application.__container__.lookup('router:main');
  },
});

test('visiting /demo', function(assert) {
  assert.expect(5);

  this.router.on('didTransition', () => {
    this.scheduler.queues['afterFirstRoutePaint'].afterPaintPromise.then(() => {
      const deferredElement = find('.deferred-container ul');
      assert.ok(deferredElement.is(':visible'), 'Deferred content should be visible.');
      const adElement = find('.ad-container h3');
      assert.notOk(adElement.is(':visible'), 'Overlay should not be visible.');
    });

    this.scheduler.queues['afterContentPaint'].afterPaintPromise.then(() => {
      const deferredElement = find('.deferred-container ul');
      assert.ok(deferredElement.is(':visible'), 'Deferred content should be visible.');
      const adElement = find('.ad-container h3');
      assert.ok(adElement.is(':visible'), 'Overlay should be visible.');
    });
  });

  visit('/demo');

  andThen(function() {
    const adElement = find('.ad-container h3');
    assert.ok(adElement.is(':visible'), 'Overlay should be visible.');
  });
});
