import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['fromDate'],
    fromDate: null,
    actions: {
        clearDate() {
            this.set('fromDate', null);
        }
    }
});
