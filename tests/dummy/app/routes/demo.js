import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let people = [];
    for (let i = 1; i <= 10; i++) {
      people.push({
        name: 'Person ' + i,
      });
    }

    let cats = [];
    for (let i = 1; i <= 5; i++) {
      cats.push({
        name: 'Cat ' + i,
      });
    }

    return hash({
      people: people,
      cats: cats,
    });
  },
});
