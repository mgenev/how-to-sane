import Ember from 'ember';

export default Ember.Mixin.create({
    dragOver(ev) {
        $('.basket').addClass('drag-enter');
        return ev.preventDefault();
    },
    dragLeave() {
        return $('.basket').removeClass('drag-enter');
    }
});
