// pods/application/route.js
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ModalActions from 'client/mixins/modal-actions';

export default Ember.Route.extend(ApplicationRouteMixin, ModalActions, {
  actions: {
    back() {
      this.historyService.back();
    },
    forward() {
      this.historyService.forward();
    }
  }
});
