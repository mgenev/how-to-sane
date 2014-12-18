import Ember from 'ember';

export default Ember.Mixin.create({
    dragOver: function(ev) {
        $('.basket').addClass('drag-enter');
        return ev.preventDefault();
    },
    dragLeave: function() {
        return $('.basket').removeClass('drag-enter');
    }
});
