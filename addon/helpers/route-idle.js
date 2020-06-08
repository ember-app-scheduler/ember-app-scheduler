import Helper from '@ember/component/helper';
import { whenRouteIdle } from '../scheduler';

export default class RouteIdle extends Helper {
  isIdle = false;

  compute() {
    if (this.isIdle) {
      return true;
    }

    whenRouteIdle().then(() => {
      this.isIdle = true;
      this.recompute();
    });

    return false;
  }
}
