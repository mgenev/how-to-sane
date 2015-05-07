import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let user = this.session.get('user.id');
        return this.store.find('album', {
          sort: 'createdAt desc',
          user
        });
    }
});
