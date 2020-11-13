import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { whenRouteIdle } from '../scheduler';

export default class RouteIdle extends Helper {
  @service router;

  @tracked isIdle = false;

  constructor() {
    super(...arguments);

    this.router.on('routeWillChange', () => {
      if (!this.isDestroying) {
        this.isIdle = false;
      }
    });
  }

  compute() {
    if (this.isIdle) {
      return true;
    }

    whenRouteIdle().then(() => {
      if (!this.isDestroying) {
        this.isIdle = true;
      }
    });

    return false;
  }
}
