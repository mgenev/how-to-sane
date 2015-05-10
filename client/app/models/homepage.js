import DS from 'ember-data';
import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({

    // relatioships
    vendor: DS.belongsTo('vendor'),

    // attributes
    title: DS.attr('string'),
    pageContent: DS.attr('string'),
    urlSegment: DS.attr('string'),
    homepageTemplate: DS.attr(),

    // computed
    @computed('name')
    slug(name) {
      let slug = name.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      this.set('urlSegment', slug);
      return slug;
    }
});
