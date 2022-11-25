import Helper from '@ember/component/helper';
import scheduler from '../scheduler';

export default class RouteIdle extends Helper {
  compute() {
    return scheduler.isIdle;
  }
}
