import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('post');
    },
    actions: {
        createPost: function(model) {
            console.log('model', model);
            var _this = this;
            model.save().then(post => _this.transitionTo('posts.post', post));
        }
    }
});