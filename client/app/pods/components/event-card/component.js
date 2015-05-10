import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    async joinEvent(event) {
      let userId = this.session.get('user.id');
      let user = await this.get('store').findById('user', userId);
      event.get('users').addObject(user);
      event.save();
    }
  }
});
