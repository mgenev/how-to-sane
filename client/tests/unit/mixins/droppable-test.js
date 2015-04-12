import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import DroppableMixin from 'client/mixins/droppable';
import Ember from 'ember';

describeModule('DroppableMixin');

it('exists', function () {
    var DroppableMixinObject = Ember.Object.extend(DroppableMixin);
    var subject = DroppableMixinObject.create();

    expect(subject).to.be.ok;
});
