import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.session.get('user.id');
    return this.store.find('album', {
      sort: 'createdAt desc',
      user
    });
  },

  setupController(controller, album) {
    let accessToken = this.container.lookup('simple-auth-authorizer:oauth2-bearer').session.content.access_token;
    let headers = {
      Authorization: 'bearer ' + accessToken
    };
    controller.set('requestHeaders', headers);
    controller.set('selectedAlbum', null);
    controller.set('model', album);
  },

  actions: {
    queuePhoto(file) {
      // Initialize a 'photos' array property on the controller
      let controller = this.controller;
      if (controller.get('photos') == null) {
        controller.set('photos', Ember.A([]));
      }

      // The following is for ember-plupload. It creates a data URI
      // which can be used in the app as an img src, for instance.
      // It then adds the current file to the controller array of photos
      file.read().then(function setPreviewUrl(dataURI) {
        file.set('preview', dataURI);
      }).then(function addFileToController(){
        controller.get('photos').pushObject(file);
      });
    },

    uploadPhotos(selectedAlbum) {
      let controller = this.controller;
      let remainingPhotos = Ember.A({});
      let photos = controller.get('photos');
      if (photos) {
        photos.forEach(function uploadPhoto(photo) {
          photo.uploader.settings.multipart_params = {'albumId': selectedAlbum.id};
          photo.upload().then(function removePhotoFromController(response) {
            if (response.status === 200) {
              // Remove photo from the photos array on the controller
              remainingPhotos = controller.get('photos').without(photo);
              controller.set('photos', remainingPhotos);
            } //todo: Add alert message if upload failed
          });
        });
      }
    },

    deletePhoto(photoFile) {
      let controller = this.controller;
      let filteredArray = controller.get('photos').rejectBy('file', photoFile.file);
      controller.set('photos', filteredArray);
      photoFile.destroy();
    }
  }
});
