# ember-app-scheduler

[![Build Status](https://travis-ci.org/ember-app-scheduler/ember-app-scheduler.svg?branch=master)](https://travis-ci.org/ember-app-scheduler/ember-app-scheduler)
[![Ember Observer Score](https://emberobserver.com/badges/ember-app-scheduler.svg)](https://emberobserver.com/addons/ember-app-scheduler)
[![npm version](https://badge.fury.io/js/ember-app-scheduler.svg)](https://badge.fury.io/js/ember-app-scheduler)
[![Monthly Downloads from NPM](https://img.shields.io/npm/dm/ember-app-scheduler.svg?style=flat-square)](https://www.npmjs.com/package/ember-app-scheduler)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](#badge)

Ember batches DOM updates and paints them after every run loop to prevent [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing). Layout thrashing can prevent a faster [First Meaningful Paint](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view) (FMP) because all the content of the page is painted at once.

As a way to mitigate the need to render all content at once regardless of its visual priority, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster FMP. This work can be delayed to run after the FMP and achieve incremental rendering of the page.

This addon provides a way to defer work into different paint phases of the rendering process to get a faster FMP. It also helps to prioritize and coordinate when the paint happens for different parts of the page.

## Installation

Using ember-cli:

```bash
ember install ember-app-scheduler
```

Using yarn:

```bash
yarn add ember-app-scheduler --save
```

Using npm:

```bash
npm install ember-app-scheduler --save
```

The `ember-app-scheduler` addon connects its functionality via the application's router. By connecting to the router's `willTransition` and `didTransition` hooks, it ensures that the timing of its API is in sync with the application's timings.

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
  }
});

Router.map(function() {
  ...
});

export default Router;
```

## Concept

Because there isn't a concrete mechanism that allows us to determine when the page is meaningfully painted, it's necessary for us to approximate this. We do so by utilizing a combination of `requestAnimationFrame` calls, which we know have a fairly consistent point of execution (prior to styling, layout, and painting), and scheduling of a macro task using `setTimeout`. Since we know that scheduling a macro task will cause that macro task to be run in the JavaScript event loop _after_ the preceding `requestAnimationFrame` and subsequent paint phase, we can have some fairly dependable guarantees for when work can occur _following a paint_.

To simply visualize what this looks like in relation to `ember-app-scheduler`'s APIs, this is how we accomplish what's described above:

`requestAnimationFrame` -> Schedule macro task (run.later(fn, 0)) -> browser paint -> macro task runs -> `whenRoutePainted` promise resolves

`requestAnimationFrame` -> Schedule macro task (run.later(fn, 0)) -> browser paint -> macro task runs -> `whenRouteIdle` promise resolves

Each of the above are chained together to ensure ordering.

## Usage

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
  }
});
```

### `whenRoutePainted`

In some cases, you may want to defer work until after the route is painted but _before_ the route is idle. In this scenario you'll want to use the `whenRoutePainted` function. This is useful for scenarios like rendering content outside viewport, rendering non critical content etc.

```javascript
import Route from '@ember/routing/route';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Route.extend({
  activate() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      // do work that needs to occur between the route being painted
      // and `whenRouteIdle`
    });
  }
});
```

## Testing

Correctly testing async behavior is crucial to ensure your tests are stable. Async state that leaks outside the bounds of the currently running test can affect other tests, causing your test suite to become non-deterministic.

The sections below describe the recommended steps to ensure your tests will be stable. It includes some test helpers that are custom to `ember-app-scheduler`, in addition to some that are within ember's test-helpers themselves.

`ember-app-scheduler`, when in test mode, will register a test waiter that will pause your tests while any `willRouteIdle` or `willRoutePending` promises are unresolved. In most cases, you can use the `settled` function within `@ember/test-helpers` as you normally would.

### Integration tests

Integration tests with `ember-app-scheduler` are quite straightforward. But there are a few scenarios that we may wish to test for. Some of those are covered below. The examples show usages of `ember-app-scheduler` in components.

#### Testing Showing hidden content

Because, in test mode, we create a test waiter that ensures we wait for `ember-app-scheduler`'s promises to resolve, we don't have to do anything special to wait for things like hidden content. We can simply employ the `settled` function from `@ember/test-helpers` to ensure our async is completed before our test can continue.

```javascript
// component-with-deferred-stuff.js
import Component from '@ember/component';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Component.extend({
  didInsertElement() {
    whenRouteIdle().then(() => {
      this.set('showHiddenContent', true);
    });
  }
});
```

```handlebars
{{! component-with-deferred-stuff.hbs }}
{{#if showHiddenContent}}
  {{yield}}
{{/if}}
```

```javascript
// component-with-deferred-stuff-test.js
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | component-with-deferred-stuff', function(hooks) {
  setupRenderingTest(hooks);

  test('hidden content is rendered when route idle', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#component-with-deferred-stuff}}
        <div class="hidden-content">Hidden</div>
      {{/component-with-deferred-stuff}}
    `);

    let hiddenContent = find('.hidden-content');

    assert.ok(hiddenContent, 'hidden content is shown');

    await settled();
  });
});
```

#### Testing the intermediate states of your promise chain

For more advanced use cases, you may want to test the intermediate states of your promises. While this case is less common, `ember-app-scheduler` does provide mechanisms that allow you to do this.

To see an example of this, you can look at `ember-app-scheduler`'s [own tests](https://github.com/ember-app-scheduler/ember-app-scheduler/blob/af688825af2591ffa97d9c0fa1e1d78d8a30731d/tests/integration/deferred-render-in-component-test.js#L1) which employ this mechanism.


### Acceptance Tests

Due to the fact that we register our own test waiter, acceptance tests with `ember-app-scheduler` are unchanged from your normal workflow.

For example, given a component that renders only when the route is idle (aptly named when-route-idle), the application code and tests look like this:

```javascript
// when-route-idle.js
import Ember from 'ember';
import layout from '../templates/components/when-route-idle';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Ember.Component.extend({
  layout,
  whenRouteIdle: false,

  init() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      this.set('whenRouteIdle', true);
    });
  },
});
```

```handlebars
{{! when-route-idle.hbs }}
{{#if whenRouteIdle}}
  {{yield}}
{{/if}}
```

```handlebars
{{! my-route.hbs }}
{{#when-route-idle}}
  <span class="only-when-route-idle">When Route Idle</span>
{{/when-route-idle}}
```

```javascript
// deferred-render-test.js
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupRouter, reset } from 'ember-app-scheduler';

module('Acceptance | when rendered tests', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting route renders deferred content via whenRouteIdle', async function(assert) {
    assert.expect(1);

    await visit('/my-route');

    assert.ok(find('.only-when-route-idle'), 'only-when-route-idle element exists');
  });
});
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
