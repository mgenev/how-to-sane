import DS from 'ember-data';
import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({

  //relationships
  vendors: DS.hasMany('vendor'),
  photos: DS.hasMany('photo'),
  albums: DS.hasMany('album'),
  posts: DS.hasMany('post'),
  statuses: DS.hasMany('status'),
  events: DS.hasMany('event'),

  // attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tagline: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),

  // computed
  @computed('firstName', 'lastName')
  fullName(f, l) {
    return `${f} ${l}`;
  }
});
