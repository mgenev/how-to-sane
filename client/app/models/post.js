import DS from 'ember-data';

export default DS.Model.extend({
    // attributes
    title: DS.attr('string'),
    body: DS.attr('string'),
    tags: DS.attr('array'),

    // relationships
    user: DS.belongsTo('user')
});
