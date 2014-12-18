export function initialize(container, application) {
  application.inject('route', 'fileUploader', 'service:file-uploader');
  application.inject('component', 'fileUploader', 'service:file-uploader');
}

export default {
  name: 'file-uploader-service',
  initialize: initialize
};
