# ember-app-scheduler

[![Build Status](https://travis-ci.org/ember-app-scheduler/ember-app-scheduler.svg?branch=master)](https://travis-ci.org/ember-app-scheduler/ember-app-scheduler)
[![Ember Observer Score](https://emberobserver.com/badges/ember-app-scheduler.svg)](https://emberobserver.com/addons/ember-app-scheduler)
[![npm version](https://badge.fury.io/js/ember-app-scheduler.svg)](https://badge.fury.io/js/ember-app-scheduler)
[![Monthly Downloads from NPM](https://img.shields.io/npm/dm/ember-app-scheduler.svg?style=flat-square)](https://www.npmjs.com/package/ember-app-scheduler)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](#badge)

Ember batches DOM updates and paints them after every run loop to prevent [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing). Layout thrashing can prevent a faster [First Meaningful Paint](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view) (FMP) because all the content of the page is painted at once.

As a way to mitigate the need to render all content at once regardless of its visual priority, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster FMP. This work can be delayed to run after the FMP and achieve incremental rendering of the page.

This addon provides a way to defer work into different paint phases of the rendering process to get a faster FMP. It also helps to prioritize and coordinate when the paint happens for different parts of the page.

The [documentation website](https://ember-app-scheduler.github.io/ember-app-scheduler/) contains more examples and API information.

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above

## Installation

    ember install ember-app-scheduler

## Usage

The `ember-app-scheduler` addon connects its functionality via the application's router. By connecting to the router's `routeWillChange`/`routeDidChange` hooks (`willTransition`/`didTransition` in Ember < 3.6), it ensures that the timing of its API is in sync with the application's timings.

To connect to your router, import `setupRouter` and `reset` from `ember-app-scheduler` and invoke them:

```javascript
import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { setupRouter, reset } from 'ember-app-scheduler';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  init() {
    this._super(...arguments);

    setupRouter(this);
  },

  destroy() {
    reset();

    this._super(...arguments);
  },
});

Router.map(function() {
  // ...
});

export default Router;
```

You can then use one of the provided APIs to defer work.

### `whenRouteIdle`

By deferring work until the route is idle, we delay non-critical work. To do this, you can import and use the `whenRouteIdle` function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.

In most cases, the `whenRouteIdle` function is all you need to defer work, though `ember-app-scheduler` does expose other functions as described below.

```javascript
import Route from '@ember/routing/route';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Route.extend({
  activate() {
    this._super(...arguments);

    whenRouteIdle().then(() => {
      // do non-critical work
    });
  },
});
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.
