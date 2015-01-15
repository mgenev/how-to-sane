import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,
	currentUser: true,
	isVendor: false,

	actions: {
		editProfile: function () {
			this.set('isEditing', true);
		},
		
        saveEdit: function() {
            this.set('isEditing', false);

            var user = this.get('user');
            user.save();

            this.transitionToRoute('s.users.user', user);
        },

        cancelEdit: function () {
			this.set('isEditing', false);        	
        }
	}   
});
