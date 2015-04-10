import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  slug: DS.attr('string'),
  navLabel: DS.attr('string'),
  layout: DS.attr('string'),
  content1: DS.attr('string'),
  content2: DS.attr('string'),
  order: DS.attr('number')
});
