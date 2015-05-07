import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickAlbum(album) {
			this.set('selectedAlbum', album);
			$('.album-tile').removeClass('selected');
			$('#' + album.get('id')).addClass('selected');
		}
	}
});
