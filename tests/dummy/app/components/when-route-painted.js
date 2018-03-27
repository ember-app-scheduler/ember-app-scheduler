import Ember from 'ember';
import layout from '../templates/components/when-route-painted';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Ember.Component.extend({
  layout,
  whenRoutePainted: false,

  init() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      this.set('whenRoutePainted', true);
    });
  },
});
