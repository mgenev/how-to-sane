import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import ModalActionsMixin from 'client/mixins/modal-actions';
import Ember from 'ember';

describeModule('DroppableMixin');

it('exists', function () {
    var ModalActionsMixinObject = Ember.Object.extend(ModalActionsMixin);
    var subject = ModalActionsMixinObject.create();

    expect(subject).to.be.ok;
});
