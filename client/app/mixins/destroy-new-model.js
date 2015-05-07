import Ember from 'ember';

const { on } = Ember;

export default Ember.Mixin.create({
  destroyNew: on('deactivate', function () {
    var model = this.currentModel;

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  })
});
