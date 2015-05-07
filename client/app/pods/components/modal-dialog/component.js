import Ember from 'ember';
import FocusForKeypress from 'client/mixins/focus-for-keypress';

export default Ember.Component.extend( FocusForKeypress, {
    action: 'closeModal',
    keyDown(e) {
        if (e.keyCode === 27) {
            this.sendAction();
        }
    },

    didInsertElement() {
        this._super(...arguments);
        var modal = $('#modalDialog').modal({
            'show': true
        });
        // TODO: Check to see if we need to cleanup this on event upon destroy
        modal.on('hidden.bs.modal', () => {
            this.sendAction();
        });
    },
    willDestroyElement() {
        this._super(...arguments);
        $('#modalDialog').modal('hide');
    }
});
