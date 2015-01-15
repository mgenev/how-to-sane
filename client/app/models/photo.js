import DS from 'ember-data';

export default DS.Model.extend({
	
	name: DS.attr('string'),
	path: DS.attr('string'),
	description: DS.attr('string'),
	tags: DS.attr('array'),

	// relationships
    user: DS.belongsTo('user')	
});
