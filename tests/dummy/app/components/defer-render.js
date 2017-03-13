import Ember from 'ember';

export default Ember.Component.extend({
  shouldRender: false,
  scheduler: Ember.inject.service(),

  init() {
    this._super();
    this.get('scheduler').scheduleWork('afterRoutePaint', () => {
      Ember.run.join(() => {
        this.set('shouldRender', true);
        this.isRendered = true;
      });
    });
  },
});
