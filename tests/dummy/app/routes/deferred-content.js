import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let people = [];
    for (let i = 1; i <= 10000; i++) {
      people.push({
        'name': 'Person ' + i
      });
    }
    return Ember.RSVP.hash({
      people: people
    });
  },
  actions: {
    didTransition() {
      return true;
    }
  }
});
