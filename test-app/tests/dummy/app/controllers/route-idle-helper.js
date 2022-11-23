import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RouteIdleHelperController extends Controller {
  queryParams = ['refresh'];

  @tracked refresh = 0;

  @action
  updateRefreshQP() {
    this.refresh += 1;
  }
}
