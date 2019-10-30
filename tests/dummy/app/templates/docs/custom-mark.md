# Custom mark

The `ember-app-scheduler` addon, as part of is functionality, relies on a `performance.mark` being emitted, which signals to the library that the deferred work can be started. While the addon provides a default `performance.mark`, it also supports using a custom mark name, which can be used instead of the default.

In order to configure `ember-app-scheduler` to use your custom mark, the following options are available to be passed as a second argument to the `setupRouter` function:

```typescript
interface SchedulerOptions {
  markName: string;
  emitMark: boolean;
}
```

When using these custom options, pass the `markName` you want to use, and set the `emitMark` option to `false`:

```js
setupRouter(router, { markName: 'my-app-custom-mark', emitMark: false } );
```

This will allow `ember-app-scheduler` to execute the deferred work at a specific time of your choosing.

> *NOTE*: You should ensure that your `performance.mark` call is invoked at a reasonably late time in the page load process, otherwise you could interfere with the normal rendering phase and ultimately adversely affect page load times. This is notoriously difficult to guage in an single page application. If you're unsure how to ensure your mark is emitted at the correct time, it's recommended that you fall back to `ember-app-scheduler`'s implementation.
