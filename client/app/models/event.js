import DS from 'ember-data';

export default DS.Model.extend({
    // relationships
    vendor: DS.belongsTo('vendor'),
    users: DS.hasMany('user'),

    // attributes
    title: DS.attr('string'),
    date: DS.attr('date'),
    tags: DS.attr('array')
});
