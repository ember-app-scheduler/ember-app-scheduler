import RSVP from 'rsvp';

export default class TaskQueue {
  constructor() {
    this.reset();    
  }

  enqueue(task) {
    this.tasks.push(task);
  }

  size() {
    return this.tasks.length;
  }

  flush() {
    this.isActive = false;

    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].callback();
    }

    this.tasks = [];
    this.isActive = true;
  }

  reset() {
    this.tasks = [];
    this.isActive = true;
    this.afterPaintDeferred = RSVP.defer();
    this.afterPaintPromise = this.afterPaintDeferred.promise;
  }
}