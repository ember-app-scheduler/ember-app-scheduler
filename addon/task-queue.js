import RSVP from 'rsvp';

export default class TaskQueue {
  constructor() {
    this.reset();    
  }

  enqueue(task) {
    this.tasks.push(task);
  }

  cancel(token) {
    let index = this.tasks.indexOf(token);
    
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  size() {
    return this.tasks.length;
  }

  flush() {
    this.isActive = false;

    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i]();
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