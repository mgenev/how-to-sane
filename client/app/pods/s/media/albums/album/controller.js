import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  queryParams: ['p'],
  p: null,
  @computed('p')
  currentPhoto(p) {
    if (p) {
      return this.store.find('photo', p);
    } else {
      return { filePath: '' };
    }
  }
});
