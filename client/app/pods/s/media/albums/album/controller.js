import Ember from 'ember';


export default Ember.Controller.extend({
    queryParams: ['p'],

    p: null,

    currentPhoto: function() {

    	if (this.get('p')) {
    		return this.store.find('photo', this.get('p'));	
    	} else {
    		return { filePath: '' };
    	}
        
    }.property('p')

});