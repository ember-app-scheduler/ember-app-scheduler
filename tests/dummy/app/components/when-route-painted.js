import Component from '@ember/component';
import layout from '../templates/components/when-route-painted';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('whenRoutePainted', false);
    debugger;
    whenRoutePainted().then(() => {
      this.set('whenRoutePainted', true);
    });
  },
});
