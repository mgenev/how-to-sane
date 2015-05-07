import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.createRecord('event');
    },

    actions: {
        createEvent(model) {
            var userId = this.session.get('user.id');
            this.store.find('vendor', {user: userId} ).then(result => {

                model.set('vendor', result.get('content')[0]);
                // model.set('tags', ['lifestyle', 'health', 'tech']);

                return model.save();
            }).then(event => this.transitionTo('s.events.event', event));

        }
    }
});
