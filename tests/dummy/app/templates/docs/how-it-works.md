# How it works

Ember batches DOM updates and paints them after every run loop to prevent [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing). Layout thrashing can prevent a faster [First Meaningful Paint](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view) (FMP) because all the content of the page is painted at once.

As a way to mitigate the need to render all content at once regardless of its visual priority, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster FMP. This work can be delayed to run after the FMP and achieve incremental rendering of the page.

This addon provides a way to defer work into different phases of the rendering process to get a faster FMP. It also helps to prioritize and coordinate when the paint happens for different parts of the page.

## Concept

Because there isn't a concrete mechanism that allows us to determine when the page is meaningfully painted, it's necessary for us to approximate this. We do so by utilizing a combination of `requestAnimationFrame` calls, which we know have a fairly consistent point of execution (prior to styling, layout, and painting), and scheduling of a macro task using `setTimeout`. Since we know that scheduling a macro task will cause that macro task to be run in the JavaScript event loop _after_ the preceding `requestAnimationFrame` and subsequent paint phase, we can have some fairly dependable guarantees for when work can occur _following a paint_.

As of version 3.0, we have changed the execution semantics to be more deterministic when executing the `whenRoutePainted` and `whenRouteIdle` work. Since `requestAnimationFrame` and `requestIdleCallback` calls can still result in work being done earlier than desired, we added an extra mechanism that will help produce deterministic results: the observation of a specific `performance.mark`. By default, you don't need to concern yourself with the emission of the `performance.mark` call. However, if your app already emits a `performance.mark` at a location that reasonably denotes when work should commence, such as Page Load Time, then you can configure `ember-app-scheduler` to observe this mark instead of its default mark.

To visualize what this looks like in relation to `ember-app-scheduler`'s APIs, this is how we accomplish what's described above:

`whenRoutePainted`
------------------

When navigating to a route
1. transition completes `didTransition`/`routeDidChange`
1. `performance.mark` is emitted
1. `PerformanceObserver.observe` observes the emitted mark, and resolves the top-level promise
1. `requestAnimationFrame`
1. Schedule macro task (`run.later(fn, 0)`)
1. browser paint
1. macro task runs
1. `whenRoutePainted` promise resolves
1. your work is exected in any thenables

`whenRouteIdle`
---------------

1. transition completes `didTransition`/`routeDidChange`
1. `performance.mark` is emitted
1. `PerformanceObserver.observe` observes the emitted mark, and resolves the top-level promise
1. `requestIdleCallback` (or `requestAnimationFrame` in browsers that don't support the former)
1. Schedule macro task (`run.later(fn, 0)`)
1. browser paint
1. macro task runs
1. `whenRouteIdle` promise resolves
1. your work is exected in any thenables

Each of the above are chained together to ensure ordering.
