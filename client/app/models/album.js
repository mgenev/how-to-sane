import DS from 'ember-data';

export default DS.Model.extend({
	//relationships
    photos: DS.hasMany('photo'),
    user: DS.belongsTo('user'),

    // attributes
    name: DS.attr('string'),
    description: DS.attr('string'),
    tags: DS.attr('array')
    
});
