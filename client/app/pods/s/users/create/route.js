import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.Object.create();
    },

    actions: {
        createUser(model) {
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
            }).then((response) => {
                this.transitionTo('login');
                // _this.get('session').authenticate('authenticator:signup', response);
            },(xhr, status, error) => {
                this.set('errorMessage', error);
            });
            // model.save().then(user => this.transitionTo('users.user', user));
        }
    }
});
