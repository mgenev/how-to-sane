export function initialize(container, application) {
  application.inject('route', 'historyService', 'service:history');
  application.inject('component', 'historyService', 'service:history');
  application.inject('controller', 'historyService', 'service:history');
}

export default {
  name: 'history-service',
  initialize: initialize
};
