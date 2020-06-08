import Helper from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { whenRouteIdle } from '../scheduler';

export default class RouteIdle extends Helper {
  @tracked isIdle = false;

  compute() {
    if (this.isIdle) {
      return true;
    }

    whenRouteIdle().then(() => {
      this.isIdle = true;
    });

    return false;
  }
}
