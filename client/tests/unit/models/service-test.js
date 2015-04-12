
import { expect } from 'chai';
import { describeModel, it} from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'service',
  'Service',
  {
     needs: [
       'model:vendor',
       'model:user',
       'model:homepage',
       'model:template',
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

    it('it has a belongsTo vendor relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

        expect(relationship.key).to.equal('vendor');
        expect(relationship.kind).to.equal('belongsTo');
    });

  }
);
