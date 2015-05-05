import Ember from 'ember';
import readFileAsDataUrl from '../../../../utils/read-file-as-data-url';

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

      // The following creates a blob url which can be used in the
      // app as an img src, for instance.  It then adds the current
      // file and its
      readFileAsDataUrl(file.get('file')).then(function setPreviewUrl(url) {
        file.set('preview', url);
      }).then(function addFileToController(){
        controller.get('photos').pushObject(file);
      });
    },
    save: function uploadPhotos() {

>>>>>>> Add basic pl-uploader component
    }
  }
});
