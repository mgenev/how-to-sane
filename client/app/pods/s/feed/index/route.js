import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		fromDate: {
			refreshModel: true
		}
	},
	fromDate: null,
    model: function (params) {
        return this.store.find('status', {
            sort: 'createdAt desc',
            createdAt: {
                ">": params.fromDate
            }
        });
    }
});
