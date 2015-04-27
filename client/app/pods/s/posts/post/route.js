/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let foo = async () => {
			try {
				let result =  await Ember.$.ajax({
  				url: '/api/v1/posts/' + params.post_id,
  				type: 'GET'
				});

        this.store.pushPayload(result);
        return this.store.all('post').content[0];

	    } catch (err) {
	      console.log('TEST THE ERROR: ', err);
	    }
    }

    return foo();
  }
});
/* jshint ignore:end */
