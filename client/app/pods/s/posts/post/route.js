/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {

    async function foo() {
			try {
				let result = await Ember.$.ajax({
							url: '/api/v1/users',
							type: 'GET'
					});
				console.log('TEST', result);
	    } catch (err) {
	      console.log('TEST THE ERROR: ', err);
	    }
    }

		foo();

    return this.store.find('post', params.post_id);
  }
});
/* jshint ignore:end */
