import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['fromDate'],
    fromDate: null,
    actions: {
        // clearDate: () => console.log(this);

        clearDate: function () {
            this.set('fromDate', null);
        }
    }
});
