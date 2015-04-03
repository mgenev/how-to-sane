import Ember from 'ember';

export default Ember.Component.extend({

	createModel: function () {
		 this.store.createRecord('album').then(model => this.set('albumModel', model));
	}.on('didInsertElement'),

	actions: {
        createAlbum: function(model) {
        	var userId = this.session.get('user.id');

            this.store.find('user', userId).then(result => {
                model.set('user', result);
                return model.save();
            }).then(() => this.transitionTo('s.media.upload'));
        }
    }
});
