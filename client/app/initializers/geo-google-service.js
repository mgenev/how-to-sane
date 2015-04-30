export function initialize(container, application) {
  application.inject('route', 'geoGoogleService', 'service:geo-google');
  application.inject('component', 'geoGoogleService', 'service:geo-google');
  application.inject('controller', 'geoGoogleService', 'service:geo-google');
}

export default {
  name: 'geo-google-service',
  initialize: initialize
};
