import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    async likeStatus(status) {
      let userId = this.session.get('user.id');
      let user = await this.get('store').findById('user', userId);
      status.get('likes').addObject(user);
      status.save();
    }
  }
});
