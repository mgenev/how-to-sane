// pods/application/route.js
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ModalActions from 'client/mixins/modal-actions';

export default Ember.Route.extend(ApplicationRouteMixin, ModalActions, {
  actions: {
    back() {
      this.transitionTo(this.historyService.get('previousRoute'));
    },
    forward() {
      this.transitionTo(this.historyService.get('nextRoute'));
    }
  }
});


// actions: {
//   back() {
//     let historyEntry =  this.historyService.get('previousRoute');
//     this.transitionTo(historyEntry.routeName, historyEntry.targetParam);
//   },
//   forward() {
//     let historyEntry =  this.historyService.get('nextRoute');
//     this.transitionTo(historyEntry.routeName, historyEntry.targetParam);
//   }
// }
