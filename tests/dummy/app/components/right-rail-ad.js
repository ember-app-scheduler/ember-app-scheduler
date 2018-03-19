import { join } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  shouldRender: false,
  scheduler: service(),
  classNames: ['ad-container'],

  init() {
    this._super();
    this._token = this.get('scheduler').on('afterContentPaint', () => {
      join(() => {
        this.set('shouldRender', true);
        this.isRendered = true;
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this._token) {
      this.get('scheduler').off('afterContentPaint', this._token);
    }
  },
});
