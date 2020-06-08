# route-idle helper

The `route-idle` helper allows you to use `ember-app-scheduler`'s `whenRouteIdle` functionality directly in your template. Using this helper will allow you to add hidden content that is to be deferred until the route is considered idle.

```hbs
{{#if (route-idle)}}
  <span id="content-to-defer">Content to only show once the route is idle</span>
{{/if}}
```
