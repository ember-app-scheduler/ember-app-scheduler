# route-idle helper

The `route-idle` helper allows you to use `ember-app-scheduler`'s `whenRouteIdle` functionality directly in your template. Using this helper will allow you to add hidden content that is to be deferred until the route is considered idle.

Note that `route-idle` will recompute when a router transition is triggered (e.g. updating the model on a route).

```hbs
{{#if (route-idle)}}
  <span id="content-to-defer">Content to only show once the route is idle</span>
{{else}}
  <span id="content-to-show-while-working">Content to only show while the route is not idle</span>
{{/if}}
```
