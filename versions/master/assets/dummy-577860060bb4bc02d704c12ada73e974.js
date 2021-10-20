'use strict';



;define("dummy/adapters/-addon-docs", ["exports", "ember-cli-addon-docs/adapters/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/adapters/-addon-docs"eaimeta@70e063a35619d71f
});
;define("dummy/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("dummy/adapters/class", ["exports", "ember-cli-addon-docs/adapters/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/adapters/class"eaimeta@70e063a35619d71f
});
;define("dummy/adapters/component", ["exports", "ember-cli-addon-docs/adapters/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/adapters/component"eaimeta@70e063a35619d71f
});
;define("dummy/adapters/module", ["exports", "ember-cli-addon-docs/adapters/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/adapters/module"eaimeta@70e063a35619d71f
});
;define("dummy/adapters/project", ["exports", "ember-cli-addon-docs/adapters/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/adapters/project"eaimeta@70e063a35619d71f
});
;define("dummy/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dummy/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
  _exports.default = _default;
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-class", ["exports", "ember-cli-addon-docs/components/api/x-class"], function (_exports, _xClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-class"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-component", ["exports", "ember-cli-addon-docs/components/api/x-component"], function (_exports, _xComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xComponent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-component"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-import-path", ["exports", "ember-cli-addon-docs/components/api/x-import-path"], function (_exports, _xImportPath) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xImportPath.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-import-path"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-meta-panel", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel"], function (_exports, _xMetaPanel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xMetaPanel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-meta-panel"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-meta-panel/header", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-meta-panel/header"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-module", ["exports", "ember-cli-addon-docs/components/api/x-module"], function (_exports, _xModule) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xModule.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-module"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-section", ["exports", "ember-cli-addon-docs/components/api/x-section"], function (_exports, _xSection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xSection.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-section"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-sections", ["exports", "ember-cli-addon-docs/components/api/x-sections"], function (_exports, _xSections) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xSections.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-sections"eaimeta@70e063a35619d71f
});
;define("dummy/components/api/x-toggles", ["exports", "ember-cli-addon-docs/components/api/x-toggles"], function (_exports, _xToggles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggles.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/api/x-toggles"eaimeta@70e063a35619d71f
});
;define("dummy/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-clipboard/components/copy-button"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-code-highlight", ["exports", "ember-cli-addon-docs/components/docs-code-highlight"], function (_exports, _docsCodeHighlight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsCodeHighlight.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-code-highlight"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-demo", ["exports", "ember-cli-addon-docs/components/docs-demo"], function (_exports, _docsDemo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsDemo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-demo"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-demo/x-example", ["exports", "ember-cli-addon-docs/components/docs-demo/x-example"], function (_exports, _xExample) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xExample.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-demo/x-example"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-demo/x-snippet", ["exports", "ember-cli-addon-docs/components/docs-demo/x-snippet"], function (_exports, _xSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xSnippet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-demo/x-snippet"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header", ["exports", "ember-cli-addon-docs/components/docs-header"], function (_exports, _docsHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsHeader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header/link", ["exports", "ember-cli-addon-docs/components/docs-header/link"], function (_exports, _link) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _link.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header/link"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header/search-box", ["exports", "ember-cli-addon-docs/components/docs-header/search-box"], function (_exports, _searchBox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchBox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header/search-box"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header/search-result", ["exports", "ember-cli-addon-docs/components/docs-header/search-result"], function (_exports, _searchResult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchResult.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header/search-result"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header/search-results", ["exports", "ember-cli-addon-docs/components/docs-header/search-results"], function (_exports, _searchResults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchResults.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header/search-results"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-header/version-selector", ["exports", "ember-cli-addon-docs/components/docs-header/version-selector"], function (_exports, _versionSelector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _versionSelector.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-header/version-selector"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-hero", ["exports", "ember-cli-addon-docs/components/docs-hero"], function (_exports, _docsHero) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsHero.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-hero"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-keyboard-shortcuts", ["exports", "ember-cli-addon-docs/components/docs-keyboard-shortcuts"], function (_exports, _docsKeyboardShortcuts) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsKeyboardShortcuts.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-keyboard-shortcuts"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-link", ["exports", "ember-cli-addon-docs/components/docs-link"], function (_exports, _docsLink) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsLink.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-link"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-logo", ["exports", "ember-cli-addon-docs/components/docs-logo"], function (_exports, _docsLogo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsLogo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-logo"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-snippet", ["exports", "ember-cli-addon-docs/components/docs-snippet"], function (_exports, _docsSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsSnippet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-snippet"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-svg-icon", ["exports", "ember-cli-addon-docs/components/docs-svg-icon"], function (_exports, _docsSvgIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsSvgIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-svg-icon"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer", ["exports", "ember-cli-addon-docs/components/docs-viewer"], function (_exports, _docsViewer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsViewer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-autogenerated-api-docs", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs"], function (_exports, _xAutogeneratedApiDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xAutogeneratedApiDocs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-autogenerated-api-docs/module-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/module-nav"], function (_exports, _moduleNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moduleNav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/module-nav"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-current-page-index", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-current-page-index"], function (_exports, _xCurrentPageIndex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xCurrentPageIndex.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-current-page-index"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-main", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-main"], function (_exports, _xMain) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xMain.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-main"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-nav-item", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-item"], function (_exports, _xNavItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xNavItem.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-nav-item"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-nav-list", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-list"], function (_exports, _xNavList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xNavList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-nav-list"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav"], function (_exports, _xNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xNav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-nav"eaimeta@70e063a35619d71f
});
;define("dummy/components/docs-viewer/x-section", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-section"], function (_exports, _xSection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xSection.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/docs-viewer/x-section"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/positioned-container"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/basic-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/in-place-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/liquid-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/liquid-tether-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/components/tether-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-tether", ["exports", "ember-tether/components/ember-tether"], function (_exports, _emberTether) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-tether/components/ember-tether"eaimeta@70e063a35619d71f
});
;define("dummy/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-wormhole/components/ember-wormhole"eaimeta@70e063a35619d71f
});
;define("dummy/components/keyboard-press", ["exports", "ember-keyboard/deprecated/components/keyboard-press"], function (_exports, _keyboardPress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboardPress.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/deprecated/components/keyboard-press"eaimeta@70e063a35619d71f
});
;define("dummy/components/modal-dialog", ["exports", "ember-cli-addon-docs/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/components/modal-dialog"eaimeta@70e063a35619d71f
});
;define("dummy/components/when-route-idle", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "ember-app-scheduler"], function (_exports, _component, _templateFactory, _component2, _tracking, _emberAppScheduler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"ember-app-scheduler",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.routeIdle}}
    {{yield}}
  {{/if}}
  */
  {
    "id": "nDKsUrC9",
    "block": "[[[41,[30,0,[\"routeIdle\"]],[[[1,\"  \"],[18,1,null],[1,\"\\n\"]],[]],null]],[\"&default\"],false,[\"if\",\"yield\"]]",
    "moduleName": "dummy/components/when-route-idle.hbs",
    "isStrictMode": false
  }); // BEGIN-SNIPPET when-route-idle.js


  let WhenRouteIdle = (_class = class WhenRouteIdle extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "routeIdle", _descriptor, this);

      (0, _emberAppScheduler.whenRouteIdle)().then(() => {
        this.routeIdle = true;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "routeIdle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class);
  _exports.default = WhenRouteIdle;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, WhenRouteIdle);
});
;define("dummy/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});
;define("dummy/controllers/docs/api/class", ["exports", "ember-cli-addon-docs/controllers/docs/api/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/controllers/docs/api/class"eaimeta@70e063a35619d71f
});
;define("dummy/controllers/route-idle-helper", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let RouteIdleHelperController = (_class = class RouteIdleHelperController extends _controller.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", ['refresh']);

      _initializerDefineProperty(this, "refresh", _descriptor, this);
    }

    updateRefreshQP() {
      this.refresh += 1;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "refresh", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateRefreshQP", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateRefreshQP"), _class.prototype)), _class);
  _exports.default = RouteIdleHelperController;
});
;define("dummy/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/append"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/break-on", ["exports", "ember-cli-addon-docs/helpers/break-on"], function (_exports, _breakOn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _breakOn.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/helpers/break-on"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/call"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/camelize"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/capitalize"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/chunk"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/classify"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compact"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compute"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/contains"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/dasherize"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/dec"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/drop"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/entries"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/equal"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/find-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/flatten"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/from-entries"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/get-code-snippet", ["exports", "ember-code-snippet/helpers/get-code-snippet"], function (_exports, _getCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCodeSnippet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-code-snippet/helpers/get-code-snippet"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/group-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-next"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-previous"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/href-to", ["exports", "ember-href-to/helpers/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(_exports, "hrefTo", {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-href-to/helpers/href-to"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/html-safe"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/humanize"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/if-key", ["exports", "ember-keyboard/helpers/if-key"], function (_exports, _ifKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ifKey.default;
    }
  });
  Object.defineProperty(_exports, "ifKey", {
    enumerable: true,
    get: function () {
      return _ifKey.ifKey;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/if-key"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/ignore-children", ["exports", "ember-modal-dialog/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/helpers/ignore-children"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/inc"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/includes"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/intersect"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/invoke"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-clipboard/helpers/is-clipboard-supported"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/join"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/keys"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/lowercase"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/helpers/media"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/next"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/noop"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-equal"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/object-at"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/on-key", ["exports", "ember-keyboard/helpers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/on-key"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/optional"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pick"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe-action"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("dummy/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/previous"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/queue"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/range"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reduce"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reject-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/repeat"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reverse"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/route-idle", ["exports", "ember-app-scheduler/helpers/route-idle"], function (_exports, _routeIdle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeIdle.default;
    }
  });
  Object.defineProperty(_exports, "routeIdle", {
    enumerable: true,
    get: function () {
      return _routeIdle.routeIdle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-app-scheduler/helpers/route-idle"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/set", ["exports", "ember-set-helper/helpers/set"], function (_exports, _set) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _set.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-set-helper/helpers/set"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/shuffle"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("dummy/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/slice"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/sort-by"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-svg-jar/utils/make-helper",0,"ember-svg-jar/utils/make-svg"eaimeta@70e063a35619d71f

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("dummy/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/take"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/titleize"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle-action"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/trim"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/truncate"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/type-signature", ["exports", "ember-cli-addon-docs/helpers/type-signature"], function (_exports, _typeSignature) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _typeSignature.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/helpers/type-signature"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/underscore"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/union"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/uppercase"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/values"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/w"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/without"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("dummy/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("dummy/initializers/ember-keyboard-first-responder-inputs", ["exports", "ember-keyboard/initializers/ember-keyboard-first-responder-inputs"], function (_exports, _emberKeyboardFirstResponderInputs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/initializers/ember-keyboard-first-responder-inputs"eaimeta@70e063a35619d71f
});
;define("dummy/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/initializers/responsive"eaimeta@70e063a35619d71f

  var _default = _responsive.default;
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "ember", "dummy/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/initializers/route-anchor-jump", ["exports", "@ember/routing/route", "@ember/runloop"], function (_exports, _route, _runloop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/runloop"eaimeta@70e063a35619d71f

  /**
   * This initializer is a temporary fix to unblock this repository from an
   * issue (https://github.com/ember-learn/ember-cli-addon-docs/issues/417)
   * originating in `ember-cli-addon-docs`. Once that repository
   * publishes the fix, this file should be deleted.
   */
  _route.default.reopen({
    afterModel() {
      if (typeof location !== 'undefined') {
        const {
          hash
        } = location;

        if (hash && hash.length) {
          (0, _runloop.schedule)('afterRender', null, () => {
            const anchor = document.querySelector(`a[href="${hash}"`);

            if (anchor) {
              anchor.scrollIntoView();
            }
          });
        }
      }

      return this._super(...arguments);
    }

  });

  function initialize() {}

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/add-modals-container", ["exports", "ember-modal-dialog/instance-initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modal-dialog/instance-initializers/add-modals-container"eaimeta@70e063a35619d71f

  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/clear-double-boot", ["exports", "ember-cli-fastboot/instance-initializers/clear-double-boot"], function (_exports, _clearDoubleBoot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clearDoubleBoot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/instance-initializers/clear-double-boot"eaimeta@70e063a35619d71f
});
;define("dummy/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-href-to/href-to"eaimeta@70e063a35619d71f

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',

    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }

        });
      }
    }

  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/ember-router-scroll", ["exports", "ember-router-scroll/instance-initializers/ember-router-scroll"], function (_exports, _emberRouterScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/instance-initializers/ember-router-scroll"eaimeta@70e063a35619d71f
});
;define("dummy/locations/none", ["exports", "ember-cli-fastboot/locations/none"], function (_exports, _none) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _none.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/locations/none"eaimeta@70e063a35619d71f
});
;define("dummy/models/class", ["exports", "ember-cli-addon-docs/models/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/models/class"eaimeta@70e063a35619d71f
});
;define("dummy/models/component", ["exports", "ember-cli-addon-docs/models/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/models/component"eaimeta@70e063a35619d71f
});
;define("dummy/models/module", ["exports", "ember-cli-addon-docs/models/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/models/module"eaimeta@70e063a35619d71f
});
;define("dummy/models/project", ["exports", "ember-cli-addon-docs/models/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/models/project"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/keyboard-shortcut", ["exports", "ember-keyboard/deprecated/modifiers/keyboard-shortcut"], function (_exports, _keyboardShortcut) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboardShortcut.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/deprecated/modifiers/keyboard-shortcut"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/on-key", ["exports", "ember-keyboard/modifiers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/modifiers/on-key"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/on-keyboard", ["exports", "ember-keyboard/deprecated/modifiers/on-keyboard"], function (_exports, _onKeyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKeyboard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/deprecated/modifiers/on-keyboard"eaimeta@70e063a35619d71f
});
;define("dummy/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("dummy/router", ["exports", "ember-cli-addon-docs/router", "dummy/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/router",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    (0, _router.docsRoute)(this, function () {
      this.route('how-it-works');
      this.route('when-route-painted');
      this.route('when-route-idle');
      this.route('route-idle-helper');
      this.route('testing');
      this.route('fastboot');
    });
    this.route('content-paint');
    this.route('aborted-paint');
    this.route('route-idle-helper');
    this.route('not-found', {
      path: '/*path'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("dummy/routes/aborted-paint", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class AbortedPaintRoute extends _route.default {
    beforeModel(transition) {
      transition.abort();
      this.transitionTo('content-paint');
    }

  }

  _exports.default = AbortedPaintRoute;
});
;define("dummy/routes/content-paint", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ContentPaintRoute extends _route.default {}

  _exports.default = ContentPaintRoute;
});
;define("dummy/routes/docs", ["exports", "ember-cli-addon-docs/routes/docs"], function (_exports, _docs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/routes/docs"eaimeta@70e063a35619d71f
});
;define("dummy/routes/docs/api/item", ["exports", "ember-cli-addon-docs/routes/docs/api/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/routes/docs/api/item"eaimeta@70e063a35619d71f
});
;define("dummy/routes/route-idle-helper", ["exports", "@ember/routing/route", "rsvp"], function (_exports, _route, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"rsvp"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class RouteIdleHelperRoute extends _route.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", {
        refresh: {
          refreshModel: true
        }
      });
    }

    model() {
      return new _rsvp.Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }

  }

  _exports.default = RouteIdleHelperRoute;
});
;define("dummy/serializers/-addon-docs", ["exports", "ember-cli-addon-docs/serializers/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/serializers/-addon-docs"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/class", ["exports", "ember-cli-addon-docs/serializers/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/serializers/class"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/component", ["exports", "ember-cli-addon-docs/serializers/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/serializers/component"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/module", ["exports", "ember-cli-addon-docs/serializers/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/serializers/module"eaimeta@70e063a35619d71f
});
;define("dummy/serializers/project", ["exports", "ember-cli-addon-docs/serializers/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/serializers/project"eaimeta@70e063a35619d71f
});
;define("dummy/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("dummy/services/docs-routes", ["exports", "ember-cli-addon-docs/services/docs-routes"], function (_exports, _docsRoutes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsRoutes.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/services/docs-routes"eaimeta@70e063a35619d71f
});
;define("dummy/services/docs-search", ["exports", "ember-cli-addon-docs/services/docs-search"], function (_exports, _docsSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsSearch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/services/docs-search"eaimeta@70e063a35619d71f
});
;define("dummy/services/fastboot", ["exports", "ember-cli-fastboot/services/fastboot"], function (_exports, _fastboot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fastboot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/services/fastboot"eaimeta@70e063a35619d71f
});
;define("dummy/services/keyboard", ["exports", "ember-keyboard/services/keyboard"], function (_exports, _keyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/services/keyboard"eaimeta@70e063a35619d71f
});
;define("dummy/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/services/media"eaimeta@70e063a35619d71f

  var _default = _media.default;
  _exports.default = _default;
});
;define("dummy/services/modal-dialog", ["exports", "@ember/object", "@ember/service", "dummy/config/environment", "ember-modal-dialog/utils/config-utils"], function (_exports, _object, _service, _environment, _configUtils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"@ember/service",0,"dummy/config/environment",0,"ember-modal-dialog/utils/config-utils"eaimeta@70e063a35619d71f

  function computedFromConfig(prop) {
    return (0, _object.computed)(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = _service.default.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: (0, _object.computed)(function () {
      return (0, _configUtils.getDestinationElementIdFromConfig)(_environment.default);
    })
  });

  _exports.default = _default;
});
;define("dummy/services/project-version", ["exports", "ember-cli-addon-docs/services/project-version"], function (_exports, _projectVersion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _projectVersion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-addon-docs/services/project-version"eaimeta@70e063a35619d71f
});
;define("dummy/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/services/router-scroll"eaimeta@70e063a35619d71f
});
;define("dummy/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("dummy/templates/aborted-paint", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "+5TEj41N",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "dummy/templates/aborted-paint.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "kEvMq0c1",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,2],null,null,null]],[],false,[\"component\",\"-outlet\",\"docs-keyboard-shortcuts\"]]",
    "moduleName": "dummy/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/content-paint", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/zznlQS2",
    "block": "[[[10,0],[14,0,\"content-paint-route\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n    \"],[10,1],[14,0,\"only-when-route-idle\"],[12],[1,\"When Route Idle\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@route\"],[\"content-paint\"]],[[\"default\"],[[[[1,\"Go to both painted\"]],[]]]]],[1,\"\\n\"],[13]],[],false,[\"when-route-idle\",\"link-to\"]]",
    "moduleName": "dummy/templates/content-paint.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "508/5025",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[30,1,[\"nav\"]],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[30,2,[\"section\"]],null,[[\"@label\"],[\"Usage\"]],null],[1,\"\\n    \"],[8,[30,2,[\"subnav\"]],null,null,[[\"default\"],[[[[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"Quickstart\",\"docs.index\"]],null],[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"How it works\",\"docs.how-it-works\"]],null],[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"whenRouteIdle\",\"docs.when-route-idle\"]],null],[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"route-idle helper\",\"docs.route-idle-helper\"]],null],[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"Testing\",\"docs.testing\"]],null],[1,\"\\n      \"],[8,[30,3,[\"item\"]],null,[[\"@label\",\"@route\"],[\"Fastboot\",\"docs.fastboot\"]],null],[1,\"\\n    \"]],[3]]]]],[1,\"\\n  \"]],[2]]]]],[1,\"\\n\\n  \"],[8,[30,1,[\"main\"]],null,null,[[\"default\"],[[[[1,\"\\n    \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[1]]]]]],[\"Viewer\",\"Nav\",\"Nav\"],false,[\"docs-header\",\"docs-viewer\",\"component\",\"-outlet\"]]",
    "moduleName": "dummy/templates/docs.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/api/item", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "xN7SjcMA",
    "block": "[[[41,[30,0,[\"model\",\"isComponent\"]],[[[1,\"  \"],[8,[39,1],null,[[\"@component\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"model\",\"isClass\"]],[[[1,\"  \"],[8,[39,2],null,[[\"@class\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"  \"],[8,[39,3],null,[[\"@module\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"]],[]]]],[]]]],[],false,[\"if\",\"api/x-component\",\"api/x-class\",\"api/x-module\"]]",
    "moduleName": "dummy/templates/docs/api/item.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/fastboot", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "lShtyD6H",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"fastboot\"],[14,0,\"docs-md__h1\"],[12],[1,\"FastBoot\"],[13],[1,\"\\n    \"],[10,2],[12],[10,\"code\"],[12],[1,\"FastBoot\"],[13],[1,\" is supported out-of-the-box within \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\". That said, it's important to understand what this means in the context of the APIs that this addon provides.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"Since \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" is aimed at providing a mechansim to defer potentially expensive parts of your application or addon until later in the rendering cycle, this behavior is at odds with what FastBoot is attempting to provide: minimal, fast HTML rendering to reduce First Paint Time. In order to ensure that we \\\"get out of the way\\\" of \"],[10,\"code\"],[12],[1,\"FastBoot\"],[13],[1,\"'s goals, we effectively disable \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\"'s APIs when in \"],[10,\"code\"],[12],[1,\"FastBoot\"],[13],[1,\". That means, importantly, that \"],[10,\"em\"],[12],[10,\"em\"],[12],[1,\"any code that you add in a call to \"],[10,\"code\"],[12],[1,\"then\"],[13],[1,\" following a call to \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\", will no longer run\"],[13],[13],[1,\".\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"In practical terms, if you need the code that was originally deferred to be run on initial page load, you'll need to consider slightly refactoring your code to accommodate these diffferent modes. Here's an example of how you could potentially refactor your code to execute synchronously in \"],[10,\"code\"],[12],[1,\"FastBoot\"],[13],[1,\", but asynchronously in client side rendering:\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjs\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" Component \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@glimmer/component'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { importantThingToDo } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'bag-of-important-things'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { whenRouteIdle } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"ImportantComponent\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Component\"],[13],[1,\" \"],[13],[1,\"{\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"constructor\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"if\"],[13],[1,\" (\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"typeof\"],[13],[1,\" FastBoot !== \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'undefined'\"],[13],[1,\") {\\n      importantThingToDo();\\n    } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"else\"],[13],[1,\" {\\n      whenRouteIdle().then(\"],[10,1],[14,0,\"hljs-function\"],[12],[1,\"() =>\"],[13],[1,\" {\\n        importantThingToDo();\\n      });\\n    }\\n  }\\n}\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"Please refer to the \"],[10,3],[14,6,\"https://ember-fastboot.com/docs/user-guide\"],[14,0,\"docs-md__a\"],[12],[1,\"Ember FastBoot user guide\"],[13],[1,\" for more details on using \"],[10,\"code\"],[12],[1,\"FastBoot\"],[13],[1,\".\"],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/fastboot.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/how-it-works", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "WcTiB0Vc",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"how-it-works\"],[14,0,\"docs-md__h1\"],[12],[1,\"How it works\"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Ember batches DOM updates and paints them after every run loop to prevent \"],[10,3],[14,6,\"https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing\"],[14,0,\"docs-md__a\"],[12],[1,\"layout thrashing\"],[13],[1,\". Layout thrashing can prevent a faster \"],[10,3],[14,6,\"https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view\"],[14,0,\"docs-md__a\"],[12],[1,\"First Meaningful Paint\"],[13],[1,\" (FMP) because all the content of the page is painted at once.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"As a way to mitigate the need to render all content at once regardless of its visual priority, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster FMP. This work can be delayed to run after the FMP and achieve incremental rendering of the page.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"This addon provides a way to defer work into different paint phases of the rendering process to get a faster FMP. It also helps to prioritize and coordinate when the paint happens for different parts of the page.\"],[13],[1,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"concept\"],[14,0,\"docs-md__h2\"],[12],[10,3],[14,6,\"#concept\"],[14,0,\"heading-anchor\"],[12],[1,\"Concept\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Because there isn't a concrete mechanism that allows us to determine when the page is meaningfully painted, it's necessary for us to approximate this. We do so by utilizing a combination of scheduling an \"],[10,\"code\"],[12],[1,\"afterRender\"],[13],[1,\" and \"],[10,\"code\"],[12],[1,\"requestAnimationFrame\"],[13],[1,\" calls, which we know have a fairly consistent point of execution (prior to styling, layout, and painting). Since we know that scheduling successive \"],[10,\"code\"],[12],[1,\"requestAnimationFrame\"],[13],[1,\" calls following the initial render, we can have some fairly dependable guarantees for when work can occur \"],[10,\"em\"],[12],[1,\"following a paint\"],[13],[1,\".\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"To simply visualize what this looks like in relation to \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\"'s APIs, this is how we accomplish what's described above:\"],[13],[1,\"\\n\"],[10,2],[12],[10,\"code\"],[12],[1,\"schedule('afterRender')\"],[13],[1,\" -> \"],[10,\"code\"],[12],[1,\"requestAnimationFrame\"],[13],[1,\" -> \"],[10,\"code\"],[12],[1,\"requestAnimationFrame\"],[13],[1,\" -> browser paint -> \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" promise resolves\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"Each of the above are chained together to ensure ordering.\"],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/how-it-works.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "s2TEp92Y",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"quickstart\"],[14,0,\"docs-md__h1\"],[12],[1,\"Quickstart\"],[13],[1,\"\\n    \\n      \"],[10,\"h2\"],[14,1,\"installation\"],[14,0,\"docs-md__h2\"],[12],[10,3],[14,6,\"#installation\"],[14,0,\"heading-anchor\"],[12],[1,\"Installation\"],[13],[13],[1,\"\\n    \"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[12],[1,\"ember install ember-app-scheduler\"],[13],[13],[1,\"\\n      \"],[10,\"h2\"],[14,1,\"usage\"],[14,0,\"docs-md__h2\"],[12],[10,3],[14,6,\"#usage\"],[14,0,\"heading-anchor\"],[12],[1,\"Usage\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"The \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" addon connects its functionality via the application's router. By connecting to the router's \"],[10,\"code\"],[12],[1,\"routeWillChange\"],[13],[1,\"/\"],[10,\"code\"],[12],[1,\"routeDidChange\"],[13],[1,\" hooks , or \"],[10,\"code\"],[12],[1,\"willTransition\"],[13],[1,\"/\"],[10,\"code\"],[12],[1,\"didTransition\"],[13],[1,\" before version 3.6, it ensures that the timing of its API is in sync with the application's timings.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"To connect to your router, import \"],[10,\"code\"],[12],[1,\"setupRouter\"],[13],[1,\" from \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" and invoke it:\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" EmberRouter \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@ember/routing/router'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" config \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'./config/environment'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { setupRouter, reset } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Router\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"EmberRouter\"],[13],[1,\" \"],[13],[1,\"{\\n  location = config.locationType;\\n  rootURL = config.rootURL;\\n\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"constructor\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"super\"],[13],[1,\"(...arguments);\\n\\n    setupRouter(\"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"this\"],[13],[1,\");\\n  },\\n}\\n\\nRouter.map(\"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"function\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\") \"],[13],[1,\"{\\n  \"],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// ...\"],[13],[1,\"\\n});\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"You can then use one of the provided APIs to defer work.\"],[13],[1,\"\\n\\n      \"],[10,\"h3\"],[14,1,\"whenrouteidle\"],[14,0,\"docs-md__h3\"],[12],[10,3],[14,6,\"#whenrouteidle\"],[14,0,\"heading-anchor\"],[12],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"By deferring work until the route is idle, we delay non-critical work. To do this, you can import and use the \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"In most cases, the \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" function is all you need to defer work, though \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" does expose other functions as described below.\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" Route \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@ember/routing/route'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { whenRouteIdle } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"IdleRoute\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Route\"],[13],[1,\" \"],[13],[1,\"{\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"activate\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"this\"],[13],[1,\"._super(...arguments);\\n\\n    whenRouteIdle().then(\"],[10,1],[14,0,\"hljs-function\"],[12],[1,\"() =>\"],[13],[1,\" {\\n      \"],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// do non-critical work\"],[13],[1,\"\\n    });\\n  }\\n}\"],[13],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/route-idle-helper", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "OsiH6HYZ",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"route-idle-helper\"],[14,0,\"docs-md__h1\"],[12],[1,\"route-idle helper\"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"The \"],[10,\"code\"],[12],[1,\"route-idle\"],[13],[1,\" helper allows you to use \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\"'s \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" functionality directly in your template. Using this helper will allow you to add hidden content that is to be deferred until the route is considered idle.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"Note that \"],[10,\"code\"],[12],[1,\"route-idle\"],[13],[1,\" will recompute when a router transition is triggered (e.g. updating the model on a route).\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{#\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\" (\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"route-idle\"],[13],[1,\")}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"<\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-attr\"],[12],[1,\"id\"],[13],[1,\"=\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"\\\"content-to-defer\\\"\"],[13],[1,\">\"],[13],[1,\"Content to only show once the route is idle\"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"</\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\">\"],[13],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"else\"],[13],[1,\"}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"<\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-attr\"],[12],[1,\"id\"],[13],[1,\"=\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"\\\"content-to-show-while-working\\\"\"],[13],[1,\">\"],[13],[1,\"Content to only show while the route is not idle\"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"</\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\">\"],[13],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{/\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\"}}\"],[13],[13],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/route-idle-helper.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/testing", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "JcL1HjQ+",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"testing\"],[14,0,\"docs-md__h1\"],[12],[1,\"Testing\"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Correctly testing async behavior is crucial to ensure your tests are stable. Async state that leaks outside the bounds of the currently running test can affect other tests, causing your test suite to become non-deterministic.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"The sections below describe the recommended steps to ensure your tests will be stable. It includes some test helpers that are custom to \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\", in addition to some that are within ember's test-helpers themselves.\"],[13],[1,\"\\n\"],[10,2],[12],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\", when in test mode, will register a test waiter that will pause your tests while any \"],[10,\"code\"],[12],[1,\"willRouteIdle\"],[13],[1,\" or \"],[10,\"code\"],[12],[1,\"willRoutePending\"],[13],[1,\" promises are unresolved. In most cases, you can use the \"],[10,\"code\"],[12],[1,\"settled\"],[13],[1,\" function within \"],[10,\"code\"],[12],[1,\"@ember/test-helpers\"],[13],[1,\" as you normally would.\"],[13],[1,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"integration-tests\"],[14,0,\"docs-md__h2\"],[12],[10,3],[14,6,\"#integration-tests\"],[14,0,\"heading-anchor\"],[12],[1,\"Integration tests\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Integration tests with \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" are quite straightforward. But there are a few scenarios that we may wish to test for. Some of those are covered below. The examples show usages of \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" in components.\"],[13],[1,\"\\n\\n      \"],[10,\"h3\"],[14,1,\"testing-showing-hidden-content\"],[14,0,\"docs-md__h3\"],[12],[10,3],[14,6,\"#testing-showing-hidden-content\"],[14,0,\"heading-anchor\"],[12],[1,\"Testing Showing hidden content\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Because, in test mode, we create a test waiter that ensures we wait for \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\"'s promises to resolve, we don't have to do anything special to wait for things like hidden content. We can simply employ the \"],[10,\"code\"],[12],[1,\"settled\"],[13],[1,\" function from \"],[10,\"code\"],[12],[1,\"@ember/test-helpers\"],[13],[1,\" to ensure our async is completed before our test can continue.\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// component-with-deferred-stuff.js\"],[13],[1,\"\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" Component \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@glimmer/component'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { whenRouteIdle } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"ComponentWithDeferredStuff\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Component\"],[13],[1,\" \"],[13],[1,\"{\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"constructor\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"super\"],[13],[1,\"(...arguments);\\n\\n    whenRouteIdle().then(\"],[10,1],[14,0,\"hljs-function\"],[12],[1,\"() =>\"],[13],[1,\" {\\n      \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"this\"],[13],[1,\".showHiddenContent = \"],[10,1],[14,0,\"hljs-literal\"],[12],[1,\"true\"],[13],[1,\";\\n    });\\n  }\\n}\"],[13],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhandlebars\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"{{! component-with-deferred-stuff.hbs }}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{#\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\" this.showHiddenContent}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n  \"],[13],[10,1],[14,0,\"hljs-template-variable\"],[12],[1,\"{{\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"yield\"],[13],[13],[1,\"}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{/\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\"}}\"],[13],[13],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// component-with-deferred-stuff-test.js\"],[13],[1,\"\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"module\"],[13],[1,\", test } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'qunit'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { setupRenderingTest } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-qunit'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { render, find, settled } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@ember/test-helpers'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" hbs \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'htmlbars-inline-precompile'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"module\"],[13],[1,\"(\\n  \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'Integration | Component | component-with-deferred-stuff'\"],[13],[1,\",\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"function\"],[13],[1,\" (\"],[10,1],[14,0,\"hljs-params\"],[12],[1,\"hooks\"],[13],[1,\") \"],[13],[1,\"{\\n    setupRenderingTest(hooks);\\n\\n    test(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'hidden content is rendered when route idle'\"],[13],[1,\", \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"async\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"function\"],[13],[1,\" (\"],[10,1],[14,0,\"hljs-params\"],[12],[1,\"assert\"],[13],[1,\") \"],[13],[1,\"{\\n      assert.expect(\"],[10,1],[14,0,\"hljs-number\"],[12],[1,\"1\"],[13],[1,\");\\n\\n      \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"await\"],[13],[1,\" render(hbs\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"`\\n      <ComponentWithDeferredStuff>\\n        <div class=\\\"hidden-content\\\">Hidden</div>\\n      </ComponentWithDeferredStuff>\\n    `\"],[13],[1,\");\\n\\n      \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"let\"],[13],[1,\" hiddenContent = find(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'.hidden-content'\"],[13],[1,\");\\n\\n      assert.ok(hiddenContent, \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'hidden content is shown'\"],[13],[1,\");\\n\\n      \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"await\"],[13],[1,\" settled();\\n    });\\n  }\\n);\"],[13],[13],[1,\"\\n\\n      \"],[10,\"h3\"],[14,1,\"testing-the-intermediate-states-of-your-promise-chain\"],[14,0,\"docs-md__h3\"],[12],[10,3],[14,6,\"#testing-the-intermediate-states-of-your-promise-chain\"],[14,0,\"heading-anchor\"],[12],[1,\"Testing the intermediate states of your promise chain\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"For more advanced use cases, you may want to test the intermediate states of your promises. While this case is less common, \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" does provide mechanisms that allow you to do this.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"To see an example of this, you can look at \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\"'s \"],[10,3],[14,6,\"https://github.com/ember-app-scheduler/ember-app-scheduler/blob/af688825af2591ffa97d9c0fa1e1d78d8a30731d/tests/integration/deferred-render-in-component-test.js#L1\"],[14,0,\"docs-md__a\"],[12],[1,\"own tests\"],[13],[1,\" which employ this mechanism.\"],[13],[1,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"acceptance-tests\"],[14,0,\"docs-md__h2\"],[12],[10,3],[14,6,\"#acceptance-tests\"],[14,0,\"heading-anchor\"],[12],[1,\"Acceptance Tests\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Due to the fact that we register our own test waiter, acceptance tests with \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" are unchanged from your normal workflow.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"For example, given a component that renders only when the route is idle (aptly named when-route-idle), the application code and tests look like this:\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// when-route-idle.js\"],[13],[1,\"\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" Component \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@glimmer/component'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { tracked } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@glimmer/tracking'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { whenRouteIdle } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"WhenRouteIdle\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Component\"],[13],[1,\" \"],[13],[1,\"{\\n  @tracked whenRouteIdle;\\n\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"constructor\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"super\"],[13],[1,\"(...arguments);\\n\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"this\"],[13],[1,\".whenRouteIdle = \"],[10,1],[14,0,\"hljs-literal\"],[12],[1,\"false\"],[13],[1,\";\\n\\n    whenRouteIdle().then(\"],[10,1],[14,0,\"hljs-function\"],[12],[1,\"() =>\"],[13],[1,\" {\\n      \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"this\"],[13],[1,\".whenRouteIdle = \"],[10,1],[14,0,\"hljs-literal\"],[12],[1,\"true\"],[13],[1,\";\\n    });\\n  }\\n}\"],[13],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhandlebars\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"{{! when-route-idle.hbs }}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{#\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\" this.whenRouteIdle}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n  \"],[13],[10,1],[14,0,\"hljs-template-variable\"],[12],[1,\"{{\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"yield\"],[13],[13],[1,\"}}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n\"],[13],[10,1],[14,0,\"hljs-template-tag\"],[12],[1,\"{{/\"],[10,1],[14,0,\"hljs-name\"],[12],[10,1],[14,0,\"hljs-builtin-name\"],[12],[1,\"if\"],[13],[13],[1,\"}}\"],[13],[13],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhandlebars\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"{{! my-route.hbs }}\"],[13],[10,1],[14,0,\"xml\"],[12],[1,\"\\n\"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"<\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"WhenRouteIdle\"],[13],[1,\">\"],[13],[1,\"\\n  \"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"<\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-attr\"],[12],[1,\"class\"],[13],[1,\"=\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"\\\"only-when-route-idle\\\"\"],[13],[1,\">\"],[13],[1,\"When Route Idle\"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"</\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"span\"],[13],[1,\">\"],[13],[1,\"\\n\"],[10,1],[14,0,\"hljs-tag\"],[12],[1,\"</\"],[10,1],[14,0,\"hljs-name\"],[12],[1,\"WhenRouteIdle\"],[13],[1,\">\"],[13],[13],[13],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// deferred-render-test.js\"],[13],[1,\"\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"module\"],[13],[1,\", test } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'qunit'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { setupApplicationTest } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-qunit'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { visit, currentRouteName } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@ember/test-helpers'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { setupRouter, reset } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"module\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'Acceptance | when rendered tests'\"],[13],[1,\", \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"function\"],[13],[1,\" (\"],[10,1],[14,0,\"hljs-params\"],[12],[1,\"hooks\"],[13],[1,\") \"],[13],[1,\"{\\n  setupApplicationTest(hooks);\\n\\n  test(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'visiting route renders deferred content via whenRouteIdle'\"],[13],[1,\", \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"async\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"function\"],[13],[1,\" (\"],[10,1],[14,0,\"hljs-params\"],[12],[1,\"assert\"],[13],[1,\") \"],[13],[1,\"{\\n    assert.expect(\"],[10,1],[14,0,\"hljs-number\"],[12],[1,\"1\"],[13],[1,\");\\n\\n    \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"await\"],[13],[1,\" visit(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'/my-route'\"],[13],[1,\");\\n\\n    assert.ok(\\n      find(\"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'.only-when-route-idle'\"],[13],[1,\"),\\n      \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'only-when-route-idle element exists'\"],[13],[1,\"\\n    );\\n  });\\n});\"],[13],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/testing.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/when-route-idle", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "XNe4Uip9",
    "block": "[[[10,0],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"whenrouteidle\"],[14,0,\"docs-md__h1\"],[12],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[13],[1,\"\\n    \"],[10,2],[12],[1,\"By deferring work until the route is idle, we delay non-critical work. To do this, you can import and use the \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"In most cases, the \"],[10,\"code\"],[12],[1,\"whenRouteIdle\"],[13],[1,\" function is all you need to defer work, though \"],[10,\"code\"],[12],[1,\"ember-app-scheduler\"],[13],[1,\" does expose other functions as described below.\"],[13],[1,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" Route \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'@ember/routing/route'\"],[13],[1,\";\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"import\"],[13],[1,\" { whenRouteIdle } \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"from\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-string\"],[12],[1,\"'ember-app-scheduler'\"],[13],[1,\";\\n\\n\"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"export\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"default\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-class\"],[12],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"class\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"IdleRoute\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-keyword\"],[12],[1,\"extends\"],[13],[1,\" \"],[10,1],[14,0,\"hljs-title\"],[12],[1,\"Route\"],[13],[1,\" \"],[13],[1,\"{\\n  \"],[10,1],[14,0,\"hljs-function\"],[12],[10,1],[14,0,\"hljs-title\"],[12],[1,\"activate\"],[13],[1,\"(\"],[10,1],[14,0,\"hljs-params\"],[12],[13],[1,\")\"],[13],[1,\" {\\n    \"],[10,1],[14,0,\"hljs-built_in\"],[12],[1,\"super\"],[13],[1,\".activate(...arguments);\\n\\n    whenRouteIdle().then(\"],[10,1],[14,0,\"hljs-function\"],[12],[1,\"() =>\"],[13],[1,\" {\\n      \"],[10,1],[14,0,\"hljs-comment\"],[12],[1,\"// do non-critical work\"],[13],[1,\"\\n    });\\n  }\\n}\"],[13],[13],[13]],[],false,[]]",
    "moduleName": "dummy/templates/docs/when-route-idle.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "6ijUI7Ow",
    "block": "[[[10,0],[12],[1,\"Error\"],[13]],[],false,[]]",
    "moduleName": "dummy/templates/error.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "urZ6sELj",
    "block": "[[[10,0],[14,0,\"ember-view\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@logo\",\"@slimHeading\",\"@strongHeading\",\"@byline\"],[\"ember\",\"Ember\",\"App Scheduler\",\"An Ember addon to schedule work at different phases of app life cycle\"]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"docs-ml-20 docs-mt-8 docs-text-center\"],[12],[1,\"\\n    Looking for the\\n    \"],[10,\"strong\"],[12],[1,\"Quickstart\"],[13],[1,\"?\\n    \"],[8,[39,2],null,[[\"@route\"],[\"docs.index\"]],[[\"default\"],[[[[1,\"It's here\"]],[]]]]],[1,\".\\n  \"],[13],[1,\"\\n  \"],[8,[39,3],null,[[\"@class\"],[\"docs-m-20\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[30,1,[\"example\"]],null,[[\"@name\"],[\"when-route-idle\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,2],[14,0,\"docs-mb-8\"],[12],[1,\"\\n        This addon provides a way to defer work into different paint phases of\\n        the rendering process to get a faster\\n        \"],[10,3],[14,6,\"https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view\"],[12],[1,\"First Meaningful Paint\"],[13],[1,\"\\n        (FMP). It also helps to prioritize and coordinate when the paint happens\\n        for different parts of the page.\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"docs-mb-8\"],[12],[1,\"\\n        The `ember-app-scheduler` addon provides APIs to hook into the router to\\n        determine when to execute its defered work. It also provides a\\n        promise-based function, ``whenRouteIdle`, to allow you to control when\\n        specific work will execute. An example of `whenRouteIdle` can be seen\\n        below.\\n      \"],[13],[1,\"\\n      \"],[8,[30,1,[\"snippet\"]],null,[[\"@name\"],[\"when-route-idle.js\"]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[1]]]]],[1,\"\\n  \"],[10,0],[14,0,\"docs-ml-20 docs-mb-8\"],[12],[1,\"To learn more, please\\n    \"],[8,[39,2],null,[[\"@route\"],[\"docs.index\"]],[[\"default\"],[[[[1,\"read the docs\"]],[]]]]],[13],[1,\"\\n\"],[13]],[\"demo\"],false,[\"docs-header\",\"docs-hero\",\"docs-link\",\"docs-demo\"]]",
    "moduleName": "dummy/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/SXSfG6W",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[30,1,[\"nav\"]],null,null,null],[1,\"\\n\\n  \"],[8,[30,1,[\"main\"]],null,null,[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"docs-container\"],[12],[1,\"\\n      \"],[10,\"h1\"],[12],[1,\"Not found\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"This page doesn't exist. \"],[8,[39,2],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Head home?\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[1]]]]]],[\"viewer\"],false,[\"docs-header\",\"docs-viewer\",\"link-to\"]]",
    "moduleName": "dummy/templates/not-found.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/templates/route-idle-helper", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "E5ORPGaH",
    "block": "[[[10,0],[12],[1,\"\\n\"],[41,[28,[37,1],null,null],[[[1,\"    \"],[10,1],[14,0,\"only-when-route-idle\"],[12],[1,\"When Route Idle\"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,1],[14,0,\"only-when-route-not-idle\"],[12],[1,\"When Route Not Idle\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n  \"],[11,\"button\"],[24,0,\"refresh-button\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"updateRefreshQP\"]]],null],[12],[1,\"Refresh\"],[13],[1,\"\\n\"],[13]],[],false,[\"if\",\"route-idle\",\"on\"]]",
    "moduleName": "dummy/templates/route-idle-helper.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dummy/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dummy/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dummy/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dummy/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/utils/titleize"eaimeta@70e063a35619d71f
});
;

;define('dummy/config/environment', [], function() {
  if (typeof FastBoot !== 'undefined') {
return FastBoot.config('dummy');
} else {
var prefix = 'dummy';try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

}
});

;
if (typeof FastBoot === 'undefined') {
  if (!runningTests) {
    require('dummy/app')['default'].create({});
  }
}

