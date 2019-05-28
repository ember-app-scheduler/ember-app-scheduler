import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('how-it-works');
  this.route('when-route-painted');
  this.route('when-route-idle');
  this.route('testing');
  this.route('first-paint');
  this.route('content-paint');
  this.route('aborted-paint');

  this.route('not-found', { path: '/*path' });
});

export default Router;
