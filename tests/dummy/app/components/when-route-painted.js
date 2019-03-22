import Component from '@ember/component';
import layout from '../templates/components/when-route-painted';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Component.extend({
  layout,
  whenRoutePainted: false,

  init() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      this.set('whenRoutePainted', true);
    });
  },
});
