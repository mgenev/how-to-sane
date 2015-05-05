import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.session.get('user.id');
    return this.store.find('album', {
      sort: 'createdAt desc',
      user
    });
  },

  actions: {
    queuePhoto: function queuePhoto(file) {
      // let album = this.modelFor(this.routeName);
      // if (album.get('photos') == null) {
      //   album.set('photos', Ember.A([]));
      // }

      let controller = this.controller;
      if (controller.get('photos') == null) {
        controller.set('photos', Ember.A([]));
      }

      file.read().then
      // The following creates a data URI which can be used in the
      // app as an img src, for instance.  It then adds the current
      // file to the controller array of photos
      file.read().then(function setPreviewUrl(dataURI) {
        file.set('preview', dataURI);
      }).then(function addFileToController(){
        controller.get('photos').pushObject(file);
      });
    },
    save: function uploadPhotos() {

    },
    delete: function removePhoto(photoFile) {
      let controller = this.controller;
      let filteredArray = controller.get('photos').rejectBy('file', photoFile.file);
      controller.set('photos', filteredArray);
    }
  }
});
