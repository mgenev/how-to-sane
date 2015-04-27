/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {

		function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
		    }
		  }
		}

    async function bar() {
      console.log('TEST 2. bar is running now');
			sleep(3000);
      if (true) {
        return 'TEST 3. i am the value of bar';
      } else {
        throw new Error('TEST Error!');
      }
    }

    async function foo() {
      console.log('TEST 1. i totally work');
			try {
				let result = await bar();
				console.log(result);
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
