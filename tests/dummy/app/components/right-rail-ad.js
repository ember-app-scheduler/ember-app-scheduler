import Ember from 'ember';

export default Ember.Component.extend({
  shouldRender: false,
  scheduler: Ember.inject.service(),
  classNames: ['ad-container'],

  init() {
    this._super();
    this._token = this.get('scheduler').scheduleWork('afterContentPaint', () => {
      Ember.run.join(() => {
        this.set('shouldRender', true);
        this.isRendered = true;
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this._token) {
      this.get('scheduler').cancelWork('afterContentPaint', this._token);
    }
  }
});
