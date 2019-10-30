import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';

/**
 * This initializer is a temporary fix to unblock this repository from an
 * issue (https://github.com/ember-learn/ember-cli-addon-docs/issues/417)
 * originating in `ember-cli-addon-docs`. Once that repository
 * publishes the fix, this file should be deleted.
 */
Route.reopen({
  afterModel() {
    if (typeof location !== 'undefined') {
      const { hash } = location;
      if (hash && hash.length) {
        schedule('afterRender', null, () => {
          const anchor = document.querySelector(`a[href="${hash}"`);
          if (anchor) {
            anchor.scrollIntoView();
          }
        });
      }
    }

    return this._super(...arguments);
  },
});

export function initialize() {}

export default {
  initialize,
};
