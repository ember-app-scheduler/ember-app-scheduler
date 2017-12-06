import { run } from '@ember/runloop';
import Evented from '@ember/object/evented';
import Service from '@ember/service';
import { moduleFor, test } from 'ember-qunit';

const AFTER_CONTENT_PAINT = 'afterContentPaint';

moduleFor('service:scheduler', 'Unit | Service | scheduler', {
  beforeEach() {
    const MockRouterService = Service.extend(Evented);

    // At the current moment, the router service is injected via the `app-scheduler` initializer.
    this.router = MockRouterService.create();
    this.scheduler = this.subject({ router: this.router });
  }
});

test('it should have no active queues', function(assert) {
  assert.expect(1);

  assert.notOk(this.scheduler.hasActiveQueue(), 'has no active queues');
});

test('it should have an active queue after scheduling work', function(assert) {
  assert.expect(1);

  let myWork = () => true;

  const workToken = this.scheduler.scheduleWork(AFTER_CONTENT_PAINT, myWork);

  assert.ok(this.scheduler.hasActiveQueue(), 'has active queues');

  this.scheduler.cancelWork(AFTER_CONTENT_PAINT, workToken);
});

test('it should not have an active queue after flushing that queue', function(assert) {
  assert.expect(2);

  let myWork = () => true;

  const workToken = this.scheduler.scheduleWork(AFTER_CONTENT_PAINT, myWork);

  assert.ok(this.scheduler.hasActiveQueue(), 'has active queues');

  run(() => {
    this.scheduler.flushQueue(AFTER_CONTENT_PAINT);
  });

  assert.notOk(this.scheduler.hasActiveQueue(), 'has no active queues');

  this.scheduler.cancelWork(AFTER_CONTENT_PAINT, workToken);
});

test('it should have no active queues after the router\'s willTransition event', function(assert) {
  assert.expect(2);

  let myWork = () => true;

  const workToken = this.scheduler.scheduleWork(AFTER_CONTENT_PAINT, myWork);

  assert.ok(this.scheduler.hasActiveQueue(), 'has active queues');

  run(() => {
    this.router.trigger('willTransition');
  });

  assert.notOk(this.scheduler.hasActiveQueue(), 'has no active queues');

  this.scheduler.cancelWork(AFTER_CONTENT_PAINT, workToken);
});

test('it should cancel work when given a token', function(assert) {
  assert.expect(1);

  let myWork = () => true;

  const workToken = this.scheduler.scheduleWork(AFTER_CONTENT_PAINT, myWork);

  this.scheduler.cancelWork(AFTER_CONTENT_PAINT, workToken);

  assert.equal(this.scheduler.queues[AFTER_CONTENT_PAINT].tasks.indexOf(workToken), -1, 'token is cancelled');
});
