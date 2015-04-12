import { expect } from 'chai';
import { describeModel, it} from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'event',
  'Event',
  {
     needs: [
        'model:vendor',
        'model:user',
        'model:homepage',
        'model:template',
        'model:service',
        'model:photo',
        'model:album',
        'model:post',
        'model:status'
      ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });

    it('it has belongsTo vendor relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

        expect(relationship.key).to.equal('vendor');
        expect(relationship.kind).to.equal('belongsTo');
    });

    it('it hasMany user relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('users');

        expect(relationship.key).to.equal('users');
        expect(relationship.kind).to.equal('hasMany');
    });
  }
);
