import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        joinEvent(event) {
            // this.sendAction('joinEvent', event);
            let userId = this.session.get('user.id');
            this.get('store').findById('user', userId).then(user => {
                event.get('users').addObject(user);
                event.save();
            });
        }
    }
});
