import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default class RouteIdleHelperRoute extends Route {
  queryParams = {
    refresh: {
      refreshModel: true,
    },
  };

  model() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}
