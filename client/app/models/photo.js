import DS from 'ember-data';

export default DS.Model.extend({
	// relationships
    user: DS.belongsTo('user'),
    album: DS.belongsTo('album'),

    // attr
	name: DS.attr('string'),
	path: DS.attr('string'),
	description: DS.attr('string'),
	tags: DS.attr('array')
});
