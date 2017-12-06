## Module Report
### Unknown Global

**Global**: `Ember.testing`

**Location**: `addon/services/scheduler.js` at line 137

```js
      this._super(...arguments);

      if (Ember.testing) {
        this._waiter = () => !this.hasActiveQueue();
        Ember.Test.registerWaiter(this._waiter);
```
