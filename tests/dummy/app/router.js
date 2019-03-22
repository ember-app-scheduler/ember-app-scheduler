import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = AddonDocsRouter.extend(RouterScroll, {
  locationType: 'router-scroll',
  historySupportMiddleware: true,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('how-it-works');
    this.route('when-route-painted');
    this.route('when-route-idle');
    this.route('testing');
  });
  this.route('first-paint');
  this.route('content-paint');
  this.route('aborted-paint');

  this.route('not-found', { path: '/*path' });
});

export default Router;
