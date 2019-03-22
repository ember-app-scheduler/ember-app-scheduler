# How it works

Ember batches DOM updates and paints them after every run loop to prevent [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing). Layout thrashing can prevent a faster [First Meaningful Paint](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view) (FMP) because all the content of the page is painted at once.

As a way to mitigate the need to render all content at once regardless of its visual priority, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster FMP. This work can be delayed to run after the FMP and achieve incremental rendering of the page.

This addon provides a way to defer work into different paint phases of the rendering process to get a faster FMP. It also helps to prioritize and coordinate when the paint happens for different parts of the page.

## Concept

Because there isn't a concrete mechanism that allows us to determine when the page is meaningfully painted, it's necessary for us to approximate this. We do so by utilizing a combination of `requestAnimationFrame` calls, which we know have a fairly consistent point of execution (prior to styling, layout, and painting), and scheduling of a macro task using `setTimeout`. Since we know that scheduling a macro task will cause that macro task to be run in the JavaScript event loop _after_ the preceding `requestAnimationFrame` and subsequent paint phase, we can have some fairly dependable guarantees for when work can occur _following a paint_.

To simply visualize what this looks like in relation to `ember-app-scheduler`'s APIs, this is how we accomplish what's described above:

`requestAnimationFrame` -> Schedule macro task (run.later(fn, 0)) -> browser paint -> macro task runs -> `whenRoutePainted` promise resolves

`requestAnimationFrame` -> Schedule macro task (run.later(fn, 0)) -> browser paint -> macro task runs -> `whenRouteIdle` promise resolves

Each of the above are chained together to ensure ordering.
