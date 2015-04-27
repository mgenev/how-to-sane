/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {

    async function bar() {
      console.log('TEST 2. bar is running now');
        return Ember.$.ajax({
							url: '/api/v2/users',
							type: 'GET',
							contentType: 'application/json'
					});
      }

    async function foo() {
      console.log('TEST 1. i totally work');
			try {
				let result = await bar();
				console.log('TEST ajax result', result);
				console.log('TEST 4. now I ran');
	    } catch (err) {
	      console.log('TEST THE ERROR: ', err);
	    }
    }

		foo();

    return this.store.find('post', params.post_id);
  }
});
/* jshint ignore:end */
