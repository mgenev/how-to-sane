import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        this.set('albumId', params.album_id);
        return this.store.find('photo', {
            album: params.album_id
        });
    },

    setupController(controller, model) {
        controller.set('album', this.store.find('album', this.get('albumId')));
        this._super(controller, model);
    },
    actions: {
        nextPhoto(nextPhotoId) {
            this.transitionTo('s.media.albums.album', {
                queryParams: {
                    p: nextPhotoId
                }
            });
        },
        closeViewer() {
            this.transitionTo('s.media.albums.album', {
                queryParams: {
                    p: null
                }
            });
        }
    }
});
