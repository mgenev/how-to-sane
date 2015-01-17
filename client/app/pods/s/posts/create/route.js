import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model: function() {
        return this.store.createRecord('post');
    },
    actions: {
        createPost: function(model) {
        	// model.set('tags', ['lifestyle', 'health', 'tech']);
        	var userId = this.session.get('user.id');

            this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                return model.save();
            }).then(post => this.transitionTo('s.posts.post', post));
        }
    }
});
