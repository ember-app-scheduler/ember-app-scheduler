# ember-app-scheduler

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

## Usage

### `whenRouteIdle`

By deferring work until the route is idle, we delay rendering non-critical content of the page or fetching non-critical data. To do this, you can import and use the `whenRouteIdle` function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.

In most cases, the `whenRouteIdle` function is all you need to defer work, though `ember-app-scheduler` does expose other functions as described below.

```javascript
import Route from '@ember/routing/route';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Route.extend({
  init() {
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
  init() {
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

`ember-app-scheduler`, when in test mode, will register a test waiter that will detect whether there's any active async behavior within it. In most cases, you can use the `settled` function within `@ember/test-helpers` to determine if all async behavior has completed, which will wait for all registered waiters to return `true` before continuing test execution.

### Integration tests

Integration tests with `ember-app-scheduler` are quite straightforward. But there are a few scenarios that we may wish to test for. Some of those are covered below. The examples show usages of `ember-app-scheduler` in components.

## Testing Showing hidden content

Because, in test mode, we create a test waiter that ensures we wait for `ember-app-scheduler`'s promises to resolve, we don't have to do anything special to wait for things like hidden content. We can simply employ the `settled` function from `@ember/test-helpers` to ensure our async is completed before our test is done.

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

## Testing the results of a chained promise

When we are wanting to test the results of a promise that is chained off one of `ember-app-scheduler`'s, the best way to do this is to expose the promise from the component itself.

```javascript
// component-with-less-important-content.js
import Component from '@ember/component';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Component.extend({
  didInsertElement() {
    fetchDeferredData();
  },

  loadLowPriority() {
    return whenRouteIdle().then(this.fetchDeferredData());
  },

  fetchDeferredData() {
    return this.get('store').queryRecord('less-important')
      .then(lessImportant => {
        this.setProperties({
          'lessImportant', lessImportant
          'showLessImportant', true
        });
      });
  }
});
```

```handlebars
{{! component-with-less-important-content.hbs }}
{{#if showLessImportant}}
    {{lessImportant}}
{{/if}}
```

```javascript
// component-with-less-important-content-test.js
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | component-with-less-important-content', function(hooks) {
  setupRenderingTest(hooks);

  test('hidden content is rendered when route idle', async function(assert) {
    await render(hbs`
      {{component-with-less-important-content}}
    `);

    await this.loadLowPriority()
      .then(() => {
        assert.ok(this.get('lowPriority'), 'low priority content is fetched');
        assert.ok(this.get('showLowPriority'), 'should show low priority');
      });
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
