import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model: function() {
        return this.store.createRecord('album');
    },
    actions: {
        createAlbum: function(model) {
        	var userId = this.session.get('user.id');

            this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                return model.save();
            }).then(() => this.transitionTo('s.media.upload'));
        }
    }
});
