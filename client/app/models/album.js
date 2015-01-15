import DS from 'ember-data';

export default DS.Model.extend({
      // attributes
    name: DS.attr('string'),
    description: DS.attr('string'),
    tags: DS.attr('array'),
    
    //relationships
    photos: DS.hasMany('photo'),
    user: DS.belongsTo('user')
});
