import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = AddonDocsRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('how-it-works');
    this.route('when-route-painted');
    this.route('when-route-idle');
    this.route('testing');
    this.route('fastboot');
  });
  this.route('first-paint');
  this.route('content-paint');
  this.route('aborted-paint');
  this.route('both-painted');
  this.route('custom-emit-mark');

  this.route('not-found', { path: '/*path' });
  this.route('custom-mark');
});

export default Router;
