import DS from 'ember-data';

export default DS.Model.extend({
    // relationships
    vendor: DS.belongsTo('vendor'),
    users: DS.hasMany('user'),

    // TODO: add images
    // attributes
    title: DS.attr('string'),
    description: DS.attr('string'),
    address: DS.attr('string'),
    eventDate: DS.attr('dateiso'),
    tags: DS.attr('array')
});
