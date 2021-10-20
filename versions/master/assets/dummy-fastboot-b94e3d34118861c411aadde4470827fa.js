define('~fastboot/app-factory', ['dummy/app', 'dummy/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});

define("dummy/initializers/ajax", ["exports", "ember"], function (_exports, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember"eaimeta@70e063a35619d71f

  const {
    get
  } = _ember.default;

  var nodeAjax = function (options) {
    let httpRegex = /^https?:\/\//;
    let protocolRelativeRegex = /^\/\//;
    let protocol = get(this, 'fastboot.request.protocol');

    if (protocolRelativeRegex.test(options.url)) {
      options.url = protocol + options.url;
    } else if (!httpRegex.test(options.url)) {
      try {
        options.url = protocol + '//' + get(this, 'fastboot.request.host') + options.url;
      } catch (fbError) {
        throw new Error('You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: ' + fbError.message);
      }
    }

    if (najax) {
      najax(options);
    } else {
      throw new Error('najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?');
    }
  };

  var _default = {
    name: 'ajax-service',
    initialize: function (application) {
      application.register('ajax:node', nodeAjax, {
        instantiate: false
      });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
      application.inject('adapter', 'fastboot', 'service:fastboot');
    }
  };
  _exports.default = _default;
});
define("dummy/initializers/error-handler", ["exports", "ember"], function (_exports, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember"eaimeta@70e063a35619d71f

  /**
   * Initializer to attach an `onError` hook to your app running in fastboot. It catches any run loop
   * exceptions and other errors and prevents the node process from crashing.
   *
   */
  var _default = {
    name: 'error-handler',
    initialize: function () {
      if (!_ember.default.onerror) {
        // if no onerror handler is defined, define one for fastboot environments
        _ember.default.onerror = function (err) {
          const errorMessage = `There was an error running your app in fastboot. More info about the error: \n ${err.stack || err}`;
          console.error(errorMessage);
        };
      }
    }
  };
  _exports.default = _default;
});
define("dummy/instance-initializers/setup-fetch", ["exports", "fetch"], function (_exports, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"fetch"eaimeta@70e063a35619d71f

  /**
   * To allow relative URLs for Fastboot mode, we need the per request information
   * from the fastboot service. Then we save the request from fastboot info.
   * On each fetch with relative url we get host and protocol from it.
   */
  function patchFetchForRelativeURLs(instance) {
    const fastboot = instance.lookup('service:fastboot');
    (0, _fetch.setupFastboot)(fastboot.get('request'));
  }

  var _default = {
    name: 'fetch',
    initialize: patchFetchForRelativeURLs
  };
  _exports.default = _default;
});//# sourceMappingURL=dummy-fastboot-d9564f0b79ba2259bbca5ce895079c8b.map
