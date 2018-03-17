import { module, test } from 'qunit';
import TaskQueue from 'ember-app-scheduler/task-queue';

module(`Unit | ember-app-scheduler | Queue`, function(hooks) {
  hooks.beforeEach(function() {
    this.taskQueue = new TaskQueue();

    this.createTask = () => {
      return () => {};
    };
  });

  test('queue size is 0 when instantiated', function(assert) {
    assert.expect(1);

    assert.equal(this.taskQueue.size(), 0, 'size is 0');
  });

  test('queue size is 1 when item is enqueued', function(assert) {
    assert.expect(1);

    this.taskQueue.enqueue(this.createTask());

    assert.equal(this.taskQueue.size(), 1, 'size is 1');
  });

  test('task is enqueued', function(assert) {
    assert.expect(1);

    const task = this.createTask();

    this.taskQueue.enqueue(task);

    assert.equal(task, this.taskQueue.tasks[0], 'task is correctly enqueued');
  });

  test('queue flushes correctly', function(assert) {
    assert.expect(2);

    const firstTask = this.createTask();
    const secondTask = this.createTask();

    this.taskQueue.enqueue(firstTask);
    this.taskQueue.enqueue(secondTask);

    this.taskQueue.flush();

    assert.equal(this.taskQueue.size(), 0, 'size is 0');
    assert.ok(this.taskQueue.isActive, 'queue is active');
  });
});
