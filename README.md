# ember-app-scheduler

This addon provides a service to schedule work at different phases of app life cycle.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-app-scheduler`
* `npm install`
* `bower install`

## Usage

### Schedule work after the First Route Paint

The `afterRoutePaint` queue can be used to schedule work after the route
is painted.

```javascript
this.get('scheduler').scheduleWork('afterRoutePaint', () => {
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
