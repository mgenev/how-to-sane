import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        joinEvent(event) {

            let userId = this.session.get('user.id');
            this.store.findById('user', userId).then(user => {
                event.get('users').addObject(user);
                event.save();
            });
        }
    }
});
