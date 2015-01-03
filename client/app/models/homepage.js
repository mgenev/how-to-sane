import DS from 'ember-data';

export default DS.Model.extend({
    // relatioships
    user: DS.belongsTo('user'),
    vendor: DS.belongsTo('vendor'),

    homepageTemplate: DS.attr(),

    // attributes
    name: DS.attr('string'),
    pageContent: DS.attr('string'),
    urlSegment: DS.attr('string'),

    // computed
    slug: function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    }.property('name')
});
