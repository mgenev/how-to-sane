import DS from 'ember-data';

export default DS.Model.extend({
  //relationships
  user: DS.belongsTo('user'),
  likes: DS.hasMany('user', {
    inverse: 'statuses'
  }),

  note: DS.attr('string'),
  state: DS.attr('string'),
  activity: DS.attr('string'),
  address: DS.attr('string'),
  location: DS.attr(),
  createdAt: DS.attr('string')

});
