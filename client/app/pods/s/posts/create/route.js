import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('post');
    },
    actions: {
        createPost: function(model) {
        	model.set('tags', ['lifestyle', 'health', 'tech']);
            model.save().then(post => this.transitionTo('s.posts.post', post));
        }
    }
});
