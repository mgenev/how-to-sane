import DS from 'ember-data';

export default DS.Model.extend({

    //relationships
    vendors: DS.hasMany('vendor'),
    photos: DS.hasMany('photo'),
    albums: DS.hasMany('album'),
    posts: DS.hasMany('post'),
    statuses: DS.hasMany('status'),

    // attributes
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    username: DS.attr('string'),
    tagline: DS.attr('string'),
    email: DS.attr('string'),
    website: DS.attr('string'),

    // computed
    fullName: function () {
    	return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});
