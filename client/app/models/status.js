import DS from 'ember-data';

export default DS.Model.extend({
    post: DS.attr('string'),
    state: DS.attr('string'),
    activity: DS.attr('string'),
});
