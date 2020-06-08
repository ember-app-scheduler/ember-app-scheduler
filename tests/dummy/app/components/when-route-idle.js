// BEGIN-SNIPPET when-route-idle.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { whenRouteIdle } from 'ember-app-scheduler';

export default class WhenRouteIdle extends Component {
  @tracked routeIdle = false;

  constructor() {
    super(...arguments);

    whenRouteIdle().then(() => {
      this.routeIdle = true;
    });
  }
}
// END-SNIPPET
