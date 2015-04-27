import Ember from 'ember';
import computedDecorator from 'ember-computed-decorators';

export default Ember.Controller.extend({
  queryParams: ['p'],

  p: null,
  @computedDecorator('p')
  currentPhoto(p) {
    debugger;
    if (p) {
      return this.store.find('photo', p);
    } else {
      return {
        filePath: ''
      };
    }

  }
});
