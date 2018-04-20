import Ember from 'ember';
import { DEBUG } from '@glimmer/env';
import { deprecate } from '@ember/debug';

const { run, RSVP, Service } = Ember;

const QUEUE_MAPPING = {
  afterFirstRoutePaint: 'whenRoutePainted',
  afterContentPaint: 'whenRouteIdle',
};

class Token {
  constructor() {
    this._cancelled = false;
  }

  get cancelled() {
    return this._cancelled;
  }

  cancel() {
    this._cancelled = true;
  }
}

class Queue {
  constructor() {
    this.reset();
  }

  reset() {
    this.tasks = [];
    this.isActive = true;
    this.afterPaintDeferred = RSVP.defer();
    this.afterPaintPromise = this.afterPaintDeferred.promise;
  }
}

const Scheduler = Service.extend({
  queueNames: ['afterFirstRoutePaint', 'afterContentPaint'],

  init() {
    this._super();
    this._nextPaintFrame = null;
    this._nextPaintTimeout = null;
    this._nextAfterPaintPromise = null;
    this._routerWillTransitionHandler = null;
    this._routerDidTransitionHandler = null;
    this._initQueues();
    this._connectToRouter();
    this._useRAF = typeof requestAnimationFrame === 'function';
  },

  scheduleWork(queueName, callback) {
    const queue = this.queues[queueName];
    const token = new Token();

    deprecate(
      `Calling \`scheduleWork('${queueName}')\` will be deprecated in favor of it's functional equivalent, ${
        QUEUE_MAPPING[queueName]
      }.`,
      false,
      {
        id: 'ember-app-scheduler-service',
        until: '2.0.0',
      }
    );

    if (queue.isActive) {
      queue.tasks.push(callback);
      queue.tasks.push(token);
    } else {
      callback();
    }

    return token;
  },

  cancelWork(token) {
    token.cancel();
  },

  flushQueue(queueName) {
    const queue = this.queues[queueName];
    queue.isActive = false;

    for (let i = 0; i < queue.tasks.length; i += 2) {
      const callback = queue.tasks[i];
      const token = queue.tasks[i + 1];

      if (!token.cancelled) {
        callback();
      }
    }

    this._afterNextPaint().then(() => {
      queue.afterPaintDeferred.resolve();
    });
  },

  _initQueues() {
    const queues = (this.queues = Object.create(null));
    const queueNames = this.queueNames;

    for (let i = 0; i < queueNames.length; i++) {
      queues[queueNames[i]] = new Queue();
    }
  },

  _resetQueues() {
    const queues = this.queues;
    const queueNames = this.queueNames;

    for (let i = 0; i < queueNames.length; i++) {
      queues[queueNames[i]].reset();
    }
  },

  _afterNextPaint() {
    if (this._nextAfterPaintPromise) {
      return this._nextAfterPaintPromise;
    }

    this._nextAfterPaintPromise = new RSVP.Promise(resolve => {
      if (this._useRAF) {
        this._nextPaintFrame = requestAnimationFrame(() =>
          this._rAFCallback(resolve)
        );
      } else {
        this._rAFCallback(resolve);
      }
    });

    return this._nextAfterPaintPromise;
  },

  _rAFCallback(resolve) {
    this._nextPaintTimeout = run.later(() => {
      this._nextAfterPaintPromise = null;
      this._nextPaintFrame = null;
      this._nextPaintTimeout = null;
      resolve();
    }, 0);
  },

  _connectToRouter() {
    const router = this.get('router');

    this._routerWillTransitionHandler = () => {
      this._resetQueues();
    };

    this._routerDidTransitionHandler = () => {
      this._afterNextPaint().then(() => {
        this.flushQueue('afterFirstRoutePaint');
        this._afterNextPaint().then(() => {
          this.flushQueue('afterContentPaint');
        });
      });
    };

    router.on('willTransition', this._routerWillTransitionHandler);
    router.on('didTransition', this._routerDidTransitionHandler);
  },

  willDestroy() {
    this._super();
    const router = this.get('router');
    this.queues = null; // don't hold any references to uncompleted items

    router.off('willTransition', this._routerWillTransitionHandler);
    router.off('didTransition', this._routerDidTransitionHandler);

    if (this._useRAF) {
      cancelAnimationFrame(this._nextPaintFrame);
    }
    run.cancel(this._nextPaintTimeout);
  },
});

if (DEBUG) {
  Scheduler.reopen({
    init() {
      this._super(...arguments);

      if (Ember.testing) {
        this._waiter = () => !this.hasActiveQueue();
        Ember.Test.registerWaiter(this._waiter);
      }
    },

    /**
     * Method to detect if there is still an active queue
     * @return {Boolean}
     */
    hasActiveQueue() {
      if (!this.queues) {
        return true;
      }

      const lastQueueName = this.queueNames[this.queueNames.length - 1];
      const lastQueue = this.queues[lastQueueName];

      const hasActiveQueue = lastQueue && lastQueue.isActive;
      const hasTasks = lastQueue.tasks.length > 0;

      return hasActiveQueue && hasTasks;
    },

    willDestroy() {
      if (this._waiter) {
        Ember.Test.unregisterWaiter(this._waiter);
        this._waiter = null;
      }

      this._super(...arguments);
    },
  });
}

export default Scheduler;
