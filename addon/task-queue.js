import RSVP from 'rsvp';

export default class TaskQueue {
  constructor() {
    this.reset();    
  }

  enqueue(task) {
    this.tasks.push(task);
  }

  dequeue() {
    return this.tasks.shift();
  }

  size() {
    return this.tasks.length;
  }

  reset() {
    this.tasks = [];
    this.isActive = true;
    this.afterPaintDeferred = RSVP.defer();
    this.afterPaintPromise = this.afterPaintDeferred.promise;
  }
}