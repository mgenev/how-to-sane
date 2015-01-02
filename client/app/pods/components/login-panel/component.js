// pods/components/login-panel.js

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LoginControllerMixin, {
	authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});