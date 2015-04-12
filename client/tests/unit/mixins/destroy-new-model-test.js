import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import DestroyNewModelMixin from 'client/mixins/destroy-new-model';
import Ember from 'ember';

describeModule('DestroyNewModelMixin');

it('exists', function () {
    var DestroyNewModelObject = Ember.Object.extend(DestroyNewModelMixin);
    var subject = DestroyNewModelObject.create();

    expect(subject).to.be.ok;
});
