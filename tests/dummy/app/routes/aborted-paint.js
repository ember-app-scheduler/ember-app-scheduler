import Route from '@ember/routing/route';

export default class AbortedPaintRoute extends Route {
  beforeModel(transition) {
    transition.abort();
    this.transitionTo('content-paint');
  }
}
