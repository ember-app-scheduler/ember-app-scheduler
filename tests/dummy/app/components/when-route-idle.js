// BEGIN-SNIPPET when-route-idle.js
import Component from '@ember/component';
import layout from '../templates/components/when-route-idle';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('whenRouteIdle', false);

    whenRouteIdle().then(() => {
      this.set('whenRouteIdle', true);
    });
  },
});
// END-SNIPPET
