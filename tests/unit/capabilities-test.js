import { module, test } from 'qunit';
import Capabilities from 'ember-app-scheduler/capabilities';

const CAPABILITIES = Capabilities.instance;

module('Unit | Capabilities', function(hooks) {
  hooks.beforeEach(function() {
    debugger;
    CAPABILITIES.reset();
  });

  test('capabilities is initialized correctly', function(assert) {
    assert.expect(2);
    debugger;
    assert.ok(CAPABILITIES.requestAnimationFrameEnabled);
    assert.ok(CAPABILITIES.requestIdleCallbackEnabled);
  });

  test('capabilities can be overridden correctly', function(assert) {
    assert.expect(2);

    CAPABILITIES.overrideCapability(
      'requestAnimationFrame',
      CAPABILITIES.DISABLED
    );
    CAPABILITIES.overrideCapability(
      'requestIdleCallback',
      CAPABILITIES.DISABLED
    );

    assert.equal(CAPABILITIES.requestAnimationFrameEnabled, false);
    assert.equal(CAPABILITIES.requestIdleCallbackEnabled, false);
  });
});
