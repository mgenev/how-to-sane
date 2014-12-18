import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    filePath: DS.attr('string')
});
