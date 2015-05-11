import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  @computed('likes.[]')
  displayList(l) {
    l = l.toArray() || [];
    switch(l.length){
      case 0: return 'no one likes this'; break;
      case 1: return `${l[0].get('fullName')} likes this.`; break;
      case 2: return `${l[0].get('fullName')} and ${l[1].get('fullName')} like this`; break;
      case 3: return `${l[0].get('fullName')}, ${l[1].get('fullName')} and ${l[2].get('fullName')} like this`; break;
      default: return `${l[0].get('fullName')} ,${l[1].get('fullName')} and ${l.length - 2} others like this`;
    }
  }
});
