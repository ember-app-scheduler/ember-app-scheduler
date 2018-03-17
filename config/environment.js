/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    APP: {},
  };

  if (environment === 'test') {
    ENV.APP.autoboot = false;
  }

  return ENV;
};
