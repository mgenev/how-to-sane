import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.Object.create();
    },
    actions: {
        createUser: function(model) {
        	var _this = this;
            Ember.$.ajax({
                url: '/api/v1/users',
                type: 'POST',
                data: JSON.stringify({
                	user: {
	                    password: model.get('password'),
	                    email: model.get('email'),
	                    firstName: model.get('firstName'),
	                    lastName: model.get('lastName')
                    }
                }),
                contentType: 'application/json'
            }).then(function(response) {                
            	_this.transitionTo('login');
                // _this.get('session').authenticate('authenticator:signup', response);
            }, function(xhr, status, error) {

                _this.set('errorMessage', error);
            });
            // model.save().then(user => this.transitionTo('users.user', user));
        }
    }
});
