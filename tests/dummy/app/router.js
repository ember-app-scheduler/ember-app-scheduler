import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  docsRoute(this, function() {
    this.route('how-it-works');
    this.route('when-route-painted');
    this.route('when-route-idle');
    this.route('route-idle-helper');
    this.route('testing');
    this.route('fastboot');
  });
  this.route('first-paint');
  this.route('content-paint');
  this.route('aborted-paint');
  this.route('both-painted');

  this.route('not-found', { path: '/*path' });
});
