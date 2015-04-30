import Ember from 'ember';
export default Ember.Controller.extend({
    queryParams: ['p'],
    p: null,
    currentPhoto: Ember.computed('p', function() {
    	if (this.get('p')) {
    		return this.store.find('photo', this.get('p'));
    	} else {
    		return { filePath: '' };
    	}
    })
});
