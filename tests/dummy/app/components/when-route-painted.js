import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { whenRoutePainted } from 'ember-app-scheduler';

export default class WhenRoutePainted extends Component {
  @tracked routePainted = false;

  constructor() {
    super(...arguments);

    whenRoutePainted().then(() => {
      this.routePainted = true;
    });
  }
}
