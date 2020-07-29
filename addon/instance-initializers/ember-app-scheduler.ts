import type ApplicationInstance from '@ember/application/instance'
import { registerDestructor } from '@ember/destroyable';
import { setupRouter, reset } from 'ember-app-scheduler';

export function initialize(appInstance: ApplicationInstance) {
  const routerService = appInstance.lookup('service:router');
  setupRouter(routerService);
  registerDestructor(routerService, reset);
}

export default {
  initialize
};
