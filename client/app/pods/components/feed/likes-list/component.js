import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  displayList: computed('likes.[]', function () {
    var l = this.get('likes') || [];
    switch(l.length){
      case 0: return 'no one likes this';
      case 1: return `${l[0].get('fullName')} likes this.`;
      case 2: return `${l[0].get('fullName')} and ${l[1].get('fullName')} like this`;
      case 3: return `${l[0].get('fullName')}, ${l[1].get('fullName')} and ${l[2].get('fullName')} like this`;
      default: return `${l[0].get('fullName')} ,${l[1].get('fullName')} and ${l.length - 2} others like this`;
    }
  })
});
