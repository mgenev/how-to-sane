import Ember from 'ember';

export default Ember.Mixin.create({
	destroyNew: function () {
    	var model = this.currentModel;

    	if (model.get('isNew')) {
    		model.destroyRecord();
    	}
    }.on('deactivate')
});
