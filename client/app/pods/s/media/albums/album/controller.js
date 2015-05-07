import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['p'],
  p: null,
  currentPhoto: computed('p', function() {
    if (this.get('p')) {
      return this.store.find('photo', this.get('p'));
    } else {
      return { filePath: '' };
    }
  })
});
