import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('first-paint');
  this.route('content-paint');
  this.route('aborted-paint');
});

export default Router;
