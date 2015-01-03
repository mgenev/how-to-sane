import Ember from 'ember';

export default Ember.ObjectController.extend({
	isEditing: false,
	currentUser: true,
	isVendor: false,

	actions: {
		editProfile: function () {
			this.set('isEditing', true);
		},
		
        saveEdit: function() {
            this.set('isEditing', false);

            var user = this.model;
            user.save();

            this.transitionToRoute('users.user', user);
        },

        cancelEdit: function () {
			this.set('isEditing', false);        	
        }
	}    
});
