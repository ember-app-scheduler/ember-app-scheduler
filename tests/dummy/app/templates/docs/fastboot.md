# FastBoot

`FastBoot` is supported out-of-the-box within `ember-app-scheduler`. That said, it's important to understand what this means in the context of the APIs that this addon provides.

Since `ember-app-scheduler` is aimed at providing a mechansim to defer potentially expensive parts of your application or addon until later in the rendering cycle, this behavior is at odds with what FastBoot is attempting to provide: minimal, fast HTML rendering to reduce First Paint Time. In order to ensure that we "get out of the way" of `FastBoot`'s goals, we effectively disable `ember-app-scheduler`'s APIs when in `FastBoot`. That means, importantly, that _*any code that you add in a call to `then` following a call to `whenRoutePainted` or `whenRouteIdle`, will no longer run*_.

In practical terms, if you need the code that was originally deferred to be run on initial page load, you'll need to consider slightly refactoring your code to accommodate these diffferent modes. Here's an example of how you could potentially refactor your code to execute synchronously in `FastBoot`, but asynchronously in client side rendering:

```js
import Component from '@ember/component';
import { importantThingToDo } 'bag-of-important-things';
import { whenRouteIdle } from 'ember-app-scheduler';

export default Component.extend({
  didInsertElement() {
    if (typeof FastBoot !=== 'undefined') {
      importantThingToDo();
    } else {
      whenRouteIdle().then(() => {
        importantThingToDo();
      });
    }
  },
});
```

Please refer to the [Ember FastBoot user guide](https://ember-fastboot.com/docs/user-guide) for more details on using `FastBoot`.
