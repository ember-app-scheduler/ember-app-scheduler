import Ember from 'ember';
import layout from '../templates/components/when-route-idle';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Ember.Component.extend({
  layout,
  whenRouteIdle: false,

  init() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      this.set('whenRouteIdle', true);
    });
  },
});
