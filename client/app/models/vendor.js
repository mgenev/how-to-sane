import DS from 'ember-data';
import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({
  //relationships
  user: DS.belongsTo('user'),
  homepages: DS.hasMany('homepage'),
  templates: DS.hasMany('template'),
  services: DS.hasMany('service'),
  events: DS.hasMany('event'),

  // attr
  name: DS.attr('string'),
  description: DS.attr('string'),
  urlSegment: DS.attr('string'),
  address: DS.attr('string'),
  location: DS.attr(),

  // computed
  @computed('name')
  slug(name) {
    let slug = name.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    this.set('urlSegment', slug);
    return slug;
  }
});
