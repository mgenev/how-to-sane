import Ember from 'ember';

let Route = Ember.Route.reopen({
  beforeModel(transition) {
    this._super(transition);

    if (this.routeName === transition.targetName) {
      this.historyService.get('log').pushObject(this.get('routeName'));

    }
    console.log(transition);
  }
});

export default Route;

// beforeModel(transition) {
//   this._super(transition);
//   let historyEntry = {};
//   let paramsArray = Object.keys(transition.params);
//   debugger;
//   let targetParam = paramsArray[paramsArray.length-1][0];
//
//   if (this.routeName === transition.targetName) {
//     historyEntry.routeName = this.get('routeName');
//     historyEntry.targetParam = targetParam;
//     this.historyService.get('log').pushObject(historyEntry);
//
//   }
//   console.log(historyEntry);
