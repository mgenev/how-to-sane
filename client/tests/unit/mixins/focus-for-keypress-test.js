import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import FocusForKeypressMixin from 'client/mixins/focus-for-keypress';
import Ember from 'ember';

describeModule('DroppableMixin');

it('exists', function () {
    var FocusForKeypressMixinObject = Ember.Object.extend(FocusForKeypressMixin);
    var subject = FocusForKeypressMixinObject.create();

    expect(subject).to.be.ok;
});
