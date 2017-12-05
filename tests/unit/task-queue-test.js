import { module, test } from 'qunit';
import TaskQueue from 'ember-app-scheduler/task-queue';
import Token from 'ember-app-scheduler/token';

module(`Unit | ember-app-scheduler | Queue`, {
  beforeEach() {
    this.taskQueue = new TaskQueue();

    this.createTask = () => {
      return { token: new Token(), callback: () => {} };
    }
  }
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

test('task is dequeued', function(assert) {
  assert.expect(1);

  const task = this.createTask();

  this.taskQueue.enqueue(task);
  
  const expectedTask = this.taskQueue.dequeue();

  assert.equal(task, expectedTask, 'task is correctly dequeued');
});

test('task is dequeued in the correct order', function(assert) {
  assert.expect(1);

  const firstTask = this.createTask();
  const secondTask = this.createTask();

  this.taskQueue.enqueue(firstTask);
  this.taskQueue.enqueue(secondTask);
  
  const expectedTask = this.taskQueue.dequeue();

  assert.equal(firstTask, expectedTask, 'task is correctly dequeued');
});

test('queue is reset correctly', function(assert) {
  assert.expect(2);

  const firstTask = this.createTask();
  const secondTask = this.createTask();

  this.taskQueue.enqueue(firstTask);
  this.taskQueue.enqueue(secondTask);
  
  this.taskQueue.reset();

  assert.equal(this.taskQueue.size(), 0, 'size is 0');
  assert.ok(this.taskQueue.isActive, 'size is 0');
});
