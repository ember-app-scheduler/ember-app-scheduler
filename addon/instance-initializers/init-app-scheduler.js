export function initialize(application) {
  application.lookup('service:scheduler');
}

export default {
  name: 'init-app-scheduler',
  initialize: initialize
};
