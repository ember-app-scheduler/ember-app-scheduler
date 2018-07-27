const CAPABILITIES = {
  requestAnimationFrame: requestAnimationFrame,
  requestIdleCallback: requestIdleCallback,
};

/**
 * @type {Capabilities}
 */
let _instance = null;

class Capabilities {
  constructor() {
    if (_instance) {
      throw new Error('Capabilities can only be constructed once');
    }

    this.reset();
    this.DISABLED = true;
  }

  static get instance() {
    if (!_instance) {
      _instance = new Capabilities();
    }

    return _instance;
  }

  overrideCapability(capability, override = false) {
    this[capability + 'Enabled'] = override
      ? false
      : typeof CAPABILITIES[capability] === 'function';
  }

  reset() {
    this.overrideCapability('requestAnimationFrame');
    this.overrideCapability('requestIdleCallback');
  }
}

export default Capabilities;
