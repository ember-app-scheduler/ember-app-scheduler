import Route from '@ember/routing/route';
import { run } from '@ember/runloop';
import { emitMark } from 'ember-app-scheduler';

export default Route.extend({
  init() {
    this._super(...arguments);

    run.later(() => {
      emitMark();
    }, 2);
  },
});
