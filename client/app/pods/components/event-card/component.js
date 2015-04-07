import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        joinEvent(event) {
            this.sendAction('joinEvent', event);
        }
    }
});
