import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,
	currentUser: true,
	isVendor: false,

  actions: {
    editProfile() {
      this.set('isEditing', true);
    },

    saveEdit() {
      this.set('isEditing', false);

      var user = this.get('user');
      user.save();

      this.transitionToRoute('s.users.user', user);
    },

    cancelEdit() {
      this.set('isEditing', false);
    }
  }
});
