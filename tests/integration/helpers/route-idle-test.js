import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { beginTransition, endTransition } from 'ember-app-scheduler';

module('Integration | Helper | route-idle', function (hooks) {
  setupRenderingTest(hooks);

  test('deferred content is visible following whenRouteIdle', async function (assert) {
    assert.expect(2);

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

  test('deferred content is hidden following subsequent transitions', async function (assert) {
    assert.expect(4);

    // FIRST TRANSITION: START
    beginTransition();

    await render(hbs`
      {{#if (route-idle)}}
        <span id="i-exist">Idle content</span>
      {{/if}}
    `);

    assert
      .dom('#i-exist')
      .doesNotExist(
        'deferred content is hidden while initial transition begins'
      );

    endTransition();

    await settled();

    assert
      .dom('#i-exist')
      .exists('deferred content is rendered after initial transition finishes');

    await settled();
    // FIRST TRANSITION: END

    // SECOND TRANSITION: START
    beginTransition();

    await settled();

    assert
      .dom('#i-exist')
      .doesNotExist(
        'deferred content is hidden while second transition is entered'
      );

    endTransition();

    await settled();

    assert
      .dom('#i-exist')
      .exists('deferred content is rendered after second transition finishes');

    await settled();
    // SECOND TRANSITION: END
  });
});
