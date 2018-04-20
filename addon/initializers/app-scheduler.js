export function initialize(application) {
  application.inject('service:scheduler', 'router', 'router:main');
}

export default {
  name: 'app-scheduler',
  initialize,
};
