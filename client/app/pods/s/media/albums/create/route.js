import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('album');
    },
    actions: {
        createAlbum: function(model) {
            model.save().then(album => this.transitionTo('s.albums.album', album));
        }
    }
});
