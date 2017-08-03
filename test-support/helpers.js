import Ember from 'ember';

/**
 * Testing helper to determine whether or not the scheduler services queues have been drained
 *
 * This function is useful for testing, because the default ember async wait helper will not
 * wait until the 'afterFirstRoutePaint' and 'afterContentPaint' queues have been drained,
 * which will cause race conditions for anything using this scheduler.
 *
 * @param app {Application} Ember testing Application
 * @param queueName {String} name of the queue to check emptiness for (i.e afterContentPaint)
 * @return {Boolean} whether or not the queueName queue is empty.
 */
export default function isQueueDrained(app, queueName) {
  const schedulerService = app.__container__.lookup('service:scheduler');
  const queue = schedulerService.queues[queueName];
  return queue.tasks.length === 0;
}
