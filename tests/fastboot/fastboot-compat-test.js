import { module, test } from 'qunit';
import {
  setup,
  visit /* mockServer */,
} from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | fastboot-compat-test', function(hooks) {
  setup(hooks);

  test('visiting route does not render deferred content via whenRoutePainted', async function(assert) {
    assert.expect(2);

    let { htmlDocument } = await visit('/first-paint');

    assert.dom('.first-paint-route', htmlDocument).exists();
    assert.dom('.only-when-route-painted', htmlDocument).doesNotExist();
  });

  test('visiting route does not render deferred content via whenRouteIdle', async function(assert) {
    assert.expect(2);

    let { htmlDocument } = await visit('/content-paint');

    assert.dom('.content-paint-route', htmlDocument).exists();
    assert.dom('.only-when-route-idle', htmlDocument).doesNotExist();
  });
});
