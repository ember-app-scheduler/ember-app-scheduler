### `whenRoutePainted`

In some cases, you may want to defer work until after the route is painted but _before_ the route is idle. In this scenario you'll want to use the `whenRoutePainted` function. This is useful for scenarios like rendering content outside viewport, rendering non critical content etc.

```javascript
import Route from '@ember/routing/route';
import { whenRoutePainted } from 'ember-app-scheduler';

export default Route.extend({
  activate() {
    this._super(...arguments);

    whenRoutePainted().then(() => {
      // do work that needs to occur between the route being painted
      // and `whenRouteIdle`
    });
  },
});
```
