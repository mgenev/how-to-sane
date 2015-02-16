export function initialize(container, application) {
  application.inject('route', 'geoService', 'service:geo');
  application.inject('component', 'geoService', 'service:geo');
}

export default {
  name: 'geo-service',
  initialize: initialize
};
