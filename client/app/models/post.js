import DS from 'ember-data';

export default DS.Model.extend({

    // relationships
    user: DS.belongsTo('user'),

    // attributes
    title: DS.attr('string'),
    body: DS.attr('string'),
    tags: DS.attr('array')

});
