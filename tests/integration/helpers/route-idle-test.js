import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { beginTransition, endTransition } from 'ember-app-scheduler';

module('Integration | Helper | route-idle', function(hooks) {
  setupRenderingTest(hooks);

  test('deferred content is visible following whenRouteIdle', async function(assert) {
    beginTransition();

    await render(hbs`
      {{#if (route-idle)}}
        <span id="i-exist">Idle content</span>
      {{/if}}
    `);

    assert.dom('#i-exist').doesNotExist();

    endTransition();

    await settled();

    assert.dom('#i-exist').exists();

    await settled();
  });
});
