import Ember from 'ember';
import Paginate from 'client/mixins/generic-paginator';

export default Ember.Component.extend(Paginate, {
  pageSize: 5,
  listToPaginate: Ember.computed.alias('nearbyPlaces')
});
