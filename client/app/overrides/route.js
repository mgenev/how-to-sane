import Ember from 'ember';

let Route = Ember.Route.reopen({
  afterModel(resolvedModel, transition) {
    this._super(resolvedModel, transition);
    var history = this.historyService;
    if (this.routeName === transition.targetName && transition.urlMethod !== 'replace') {

      Ember.run.schedule('afterRender', this, () => {
        history.get('log').pushObject(this.get('router.url'));
        history.set('cursor', history.get('log').length);
      });
    }
  }
});

export default Route;
