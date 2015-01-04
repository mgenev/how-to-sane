import DS from 'ember-data';

export default DS.Model.extend({
    
    // attributes
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    username: DS.attr('string'),
    tagline: DS.attr('string'),
    email: DS.attr('string'),

    //relationships
    vendors: DS.hasMany('vendor'),

    // computed
    fullName: function () {
    	return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});
