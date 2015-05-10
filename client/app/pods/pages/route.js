import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('page', { urlSegment: params.urlSegment }).then(model => model.content[0]);
  },
  renderTemplate(controller, model) {
    this.render('s.page-manager.layouts.' + model.get('layout'));
  }
});
