import DS from 'ember-data';

export default DS.Model.extend({
  
	//relationships
	vendor: DS.belongsTo('vendor'),

	// attr
	name: DS.attr('string'),
	description: DS.attr('string')
  
});
