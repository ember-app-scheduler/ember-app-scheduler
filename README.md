# ember-app-scheduler

Ember batches DOM updates and paints them after every run loop to prevent layout thrashing. This prevents a faster First Meaningful Paint (FMP) because all the content of the page is painted at once. For a large scale application though, some work done on the page like ads, analytics tracking, rendering non critical content, rendering content outside viewport etc. can be deferred to achieve a faster First Meaningful Paint (FMP). This work can be scheduled to run after the First Meaningful Paint and achieve incremental rendering of the page.

This addon provides a service to schedule work in different paint phases of rendering process to get a faster First Meaningful Paint (FMP). It also helps to prioritize and coordinate when the paint happens for different parts of the page.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-app-scheduler`
* `npm install`
* `bower install`

## Usage

### Schedule work after the First Route Paint

The `afterFirstRoutePaint` queue can be used to schedule work after the route is first painted. This is useful for scenarios like rendering content outside viewport, rendering non critical content etc.

```javascript
this.get('scheduler').scheduleWork('afterFirstRoutePaint', () => {
  // schedule work
});
```

The `afterContentPaint` queue can be used to schedule work after all the important content of the page has been painted. This is useful for scenarios like rendering ads, scheduling tracking work, rendering of popup overlays etc.

```javascript
this.get('scheduler').scheduleWork('afterContentPaint', () => {
  // schedule work
});
```
## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
