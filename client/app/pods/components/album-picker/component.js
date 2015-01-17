import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickAlbum: function (album) {
			this.set('selectedAlbum', album);
		}
	}
});
