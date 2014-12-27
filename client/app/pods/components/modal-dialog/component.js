import Ember from 'ember';

export default Ember.Component.extend({
    action: "closeModal",
    didInsertElement: function() {
        var self = this;
        var modal = $('#modalDialog').modal({
            'show': true
        });
        // TODO: Check to see if we need to cleanup this on event upon destroy
        modal.on('hidden.bs.modal', function() {
            self.sendAction();
        });
    },
    willDestroyElement: function() {
        $('#modalDialog').modal('hide');
    }
});
