import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.createRecord('status');
    },

    actions: {
        postStatus(model) {
            var userId = this.session.get('user.id');

            this.store.find('user', userId).then(result => {
                model.set('user', result);
                return model.save();
            }).then(() => this.transitionTo('s.feed'));
        }
    }
});
