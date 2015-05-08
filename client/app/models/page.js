import DS from 'ember-data';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({
  //TODO add owner user
  name: DS.attr('string'),
  title: DS.attr('string'),
  urlSegment: DS.attr('string'),
  navLabel: DS.attr('string'),
  layout: DS.attr('string', { defaultValue: 'standard'}),
  content1: DS.attr('string'),
  content2: DS.attr('string'),
  order: DS.attr('number'),
  @computed('title')
  slug(title) {
    if (title) {
      let slug = title.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      this.set('urlSegment', slug);
      return slug;
    }
  },
});
