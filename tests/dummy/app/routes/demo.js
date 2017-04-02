import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let people = [];
    for (let i = 1; i <= 10; i++) {
      people.push({
        'name': 'Person ' + i
      });
    }

    let cats = [];
    for (let i = 1; i <= 5; i++) {
      cats.push({
        'name': 'Cat ' + i
      });
    }

    return Ember.RSVP.hash({
      people: people,
      cats: cats
    });
  }
});
