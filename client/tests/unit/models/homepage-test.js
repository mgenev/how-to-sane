import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'homepage',
  'Homepage', {
      needs: [
        'model:vendor',
        'model:user',
        'model:template',
        'model:service',
        'model:event'
      ]
  },
  function () {

    // Replace this with your real tests.
    it('exists', function () {
        var model = this.subject();
        // var store = this.store();
        expect(model).to.be.ok;
    });

    it('it has a belongsTo vendor relationship', function () {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

        expect(relationship.key).to.equal('vendor');
        expect(relationship.kind).to.equal('belongsTo');
    });


    it('it creates a url-safe slug', function () {
      var model;
      var _this = this;
      Ember.run(function () {
              model = _this.subject({
                  name: 'This IS !url-safe'
              });

              expect(model.get('slug')).to.equal('this-is-url-safe');
              expect(model.get('urlSegment')).to.equal('this-is-url-safe');
          });
      });
  });
