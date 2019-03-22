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
  },
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

module('Integration | Component | component-with-deferred-stuff', function(
  hooks
) {
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

    assert.ok(
      find('.only-when-route-idle'),
      'only-when-route-idle element exists'
    );
  });
});
```
