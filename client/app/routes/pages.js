import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //console.log('Catchall PARAMS, ', params);
    return this.store.find('page', { slug: params.slug });
  },
  renderTemplate: function(controller, model) {
    var templateName;
    var self = this;

    //console.log('Catchall controller, ', controller);
    console.log('Catchall model, ', model);

    //TODO: need to fix this as layout is coming out undefined.
    templateName = model._data.layout;

    //TODO: test if the layout template exists, if not return a friendly not found
    _this.render('s.page-manager.layouts.' + templateName);
  }
});
