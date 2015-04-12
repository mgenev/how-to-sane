
import { expect } from 'chai';
import { describeModel, it} from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'status',
  'status',
  {
     needs: [
       'model:user',
       'model:vendor',
       'model:photo',
       'model:album',
       'model:post',
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

    it('it has a belongsTo user relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('user');

        expect(relationship.key).to.equal('user');
        expect(relationship.kind).to.equal('belongsTo');
    });

  }
);
