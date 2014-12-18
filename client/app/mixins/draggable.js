import Ember from 'ember';

export default Ember.Mixin.create({
    attributeBindings: ['draggable'],
    draggable: "true",
    dragStart: function(ev) {
        ev.dataTransfer.setData('text/data', this.get('content.id'));
        return $('.basket').addClass('dragging');
    },
    dragEnd: function() {
        return $('.basket').removeClass('dragging');
    }
});
