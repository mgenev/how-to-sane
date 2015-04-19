import Ember from 'ember';

let Route = Ember.Route.reopen({
  beforeModel(transition) {
    this._super(transition);
    var history =  this.historyService;
    if (this.routeName === transition.targetName) {
      // TODO get location path instead and feed a string to the history manager
      history.get('log').pushObject(this.get('routeName'));
      history.set('cursor', history.get('log').length);

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
