# `whenRouteIdle`

By deferring work until the route is idle, we delay non-critical work. To do this, you can import and use the `whenRouteIdle` function. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.

In most cases, the `whenRouteIdle` function is all you need to defer work, though `ember-app-scheduler` does expose other functions as described below.

```javascript
import Route from '@ember/routing/route';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Route.extend({
  activate() {
    this._super(...arguments);

    whenRouteIdle().then(() => {
      // do non-critical work
    });
  },
});
```
