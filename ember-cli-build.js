'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  // Build with embroider when embroider is installed
  if ('@embroider/webpack' in app.dependencies()) {
    const {
      Webpack
    } = require('@embroider/webpack'); // eslint-disable-line node/no-missing-require
    return require('@embroider/compat') // eslint-disable-line node/no-missing-require
      .compatBuild(app, Webpack, {
        packagerOptions: {
          webpackConfig: {
            devtool: false,
          },
        },
      });
  } else {
    return app.toTree();
  }
};
