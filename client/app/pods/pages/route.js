import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('page', { slug: params.slug }).then(model => model.content[0]);
  },
  renderTemplate(controller, model) {
    this.render('s.page-manager.layouts.' + model.get('layout'));
  }
});
