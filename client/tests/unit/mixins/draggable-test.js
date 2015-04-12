import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import DraggableMixin from 'client/mixins/draggable';
import Ember from 'ember';

describeModule('DraggableMixin');

it('exists', function () {
    var DraggableMixinObject = Ember.Object.extend(DraggableMixin);
    var subject = DraggableMixinObject.create();

    expect(subject).to.be.ok;
});
