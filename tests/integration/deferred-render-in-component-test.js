import { module, test } from 'qunit';
import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, waitFor, settled } from '@ember/test-helpers';
import {
  beginTransition,
  endTransition,
  whenRoutePainted,
  whenRouteIdle,
} from 'ember-app-scheduler';

module('Integration | Component | when rendered in component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    let testContext = this;
    let name = 'component:deferred-render';

    this.owner.register(
      name,
      Component.extend({
        showFoo: false,
        showBar: false,

        init() {
          this._super(...arguments);
          testContext.componentInstance = this;
        },
        destroy() {
          this._super(...arguments);
        },

        didInsertElement() {
          whenRoutePainted().then(() => {
            this.set('showFoo', true);
          });

          whenRouteIdle().then(() => {
            this.set('showBar', true);
          });
        },
      })
    );

    this.Component = this.owner.factoryFor
      ? this.owner.factoryFor(name)
      : this.owner._lookupFactory(name);
  });

  test('deferred element is visible following whenRoutePainted', async function(assert) {
    assert.expect(2);

    let foo;

    this.owner.register(
      'template:components/deferred-render',
      hbs`{{#if showFoo}}<span class="foo"></span>{{/if}}`
    );

    beginTransition();

    await render(hbs`{{deferred-render}}`);

    foo = find('.foo');

    assert.isNotVisible(foo);

    endTransition();

    foo = await waitFor('.foo');

    assert.isVisible(foo);

    await settled();
  });

  test('deferred element is visible following whenRouteIdle', async function(assert) {
    assert.expect(2);

    let foo;

    this.owner.register(
      'template:components/deferred-render',
      hbs`{{#if showBar}}<span class="bar"></span>{{/if}}`
    );

    beginTransition();

    await render(hbs`{{deferred-render}}`);

    foo = find('.bar');

    assert.isNotVisible(foo);

    endTransition();

    foo = await waitFor('.bar');

    assert.isVisible(foo);

    await settled();
  });
});
