import DS from 'ember-data';

export default DS.Model.extend({
	// relationships
    user: DS.belongsTo('user'),
    album: DS.belongsTo('album'),

    // attr
	
	filePath: DS.attr('string'),
	thumbPath: DS.attr('string'),
	tags: DS.attr('array'),
	createdAt: DS.attr('string')
	 
});
