import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
        openModal: function(modalName, currentController) {
            this.render(modalName, {
                into: 'application',
                outlet: 'modal',
                controller: currentController
            });
        },
        closeModal: function() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
