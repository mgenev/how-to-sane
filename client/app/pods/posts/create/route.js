import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('post');
    },
    actions: {
        createPost: function(model) {
            model.save().then(post => this.transitionTo('posts.post', post));
        }
    }
});
