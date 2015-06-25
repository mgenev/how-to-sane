import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({

    // relatioships
    vendor: DS.belongsTo('vendor'),

    // attributes
    title: DS.attr('string'),
    pageContent: DS.attr('string'),
    urlSegment: DS.attr('string'),
    homepageTemplate: DS.attr(),

    // computed
    slug: computed('name', function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    })
});
