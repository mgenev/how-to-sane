import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        this.set('albumId', params.album_id);
        return this.store.find('photo', {
            album: params.album_id
        });
    },

    setupController: function(controller, model) {
        controller.set('album', this.store.find('album', this.get('albumId')));
        this._super(controller, model);
    },
    actions: {
        nextPhoto: function(nextPhotoId) {
            this.transitionTo('s.media.albums.album', {
                queryParams: {
                    p: nextPhotoId
                }
            });
        },
        closeViewer: function() {
            this.transitionTo('s.media.albums.album', {
                queryParams: {
                    p: null
                }
            });
        }
    }
});
