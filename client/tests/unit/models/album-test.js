import { expect } from 'chai';
import { describeModel,it } from 'ember-mocha';

import Ember from 'ember';

describeModel(
  'album',
  'Album',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:user',
      'model:vendor',
      'model:photo',
      'model:post',
      'model:status',
      'model:event'
    ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });

    it('it has belongsTo user relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('user');

        expect(relationship.key).to.equal('user');
        expect(relationship.kind).to.equal('belongsTo');
    });

    it('it hasMany photo relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('photos');

        expect(relationship.key).to.equal('photos');
        expect(relationship.kind).to.equal('hasMany');
    });
  }
);
