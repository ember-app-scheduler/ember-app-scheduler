import { join } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  shouldRender: false,
  scheduler: service(),
  classNames: ['deferred-container'],

  init() {
    this._super();
    this._token = this.get('scheduler').scheduleWork('afterFirstRoutePaint', () => {
      join(() => {
        this.set('shouldRender', true);
        this.isRendered = true;
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this._token) {
      this.get('scheduler').cancelWork('afterFirstRoutePaint', this._token);
    }
  }
});
