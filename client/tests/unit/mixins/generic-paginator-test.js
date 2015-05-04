/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import GenericPaginatorMixin from 'client/mixins/generic-paginator';

describe('GenericPaginatorMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var GenericPaginatorObject = Ember.Object.extend(GenericPaginatorMixin);
    var subject = GenericPaginatorObject.create();
    expect(subject).to.be.ok;
  });
});
