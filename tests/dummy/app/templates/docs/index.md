# Quickstart

## Installation

    ember install ember-app-scheduler

## Usage

The `ember-app-scheduler` addon connects its functionality via the application's router. By connecting to the router's `routeWillChange`/`routeDidChange` hooks , or `willTransition`/`didTransition` before version 3.6, it ensures that the timing of its API is in sync with the application's timings.

To connect to your router, import `setupRouter` and `reset` from `ember-app-scheduler` and invoke them:

```javascript
import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { setupRouter, reset } from 'ember-app-scheduler';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);

    setupRouter(this);
  },

  destroy() {
    reset();

    super.destroy(...arguments);
  }
}

Router.map(function() {
  // ...
});
```

You can then use one of the provided APIs to defer work.

### `whenRouteIdle`

By deferring work until the route is idle, we delay non-critical work. To do this, you can import and use the `whenRouteIdle` function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.

In most cases, the `whenRouteIdle` function is all you need to defer work, though `ember-app-scheduler` does expose other functions as described below.

```javascript
import Route from '@ember/routing/route';
import { whenRouteIdle } from 'ember-app-scheduler';

export default class IdleRoute extends Route {
  activate() {
    this._super(...arguments);

    whenRouteIdle().then(() => {
      // do non-critical work
    });
  }
}
```
