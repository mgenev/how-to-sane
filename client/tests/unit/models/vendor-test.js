import { expect } from 'chai';
import { describeModel, it} from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'vendor',
  'Vendor',
  {
     needs: [
       'model:album',
       'model:user',
       'model:homepage',
       'model:template',
       'model:service',
       'model:status',
       'model:photo',
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

    // --- Relationships ---
    it('it has a belongsTo user relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('user');

        expect(relationship.key).to.equal('user');
        expect(relationship.kind).to.equal('belongsTo');
    });

    // --- Relationships ---
    it('it hasMany homepages relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('homepages');

        expect(relationship.key).to.equal('homepages');
        expect(relationship.kind).to.equal('hasMany');
    });

    // --- Relationships ---
    it('it hasMany templates relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('templates');

        expect(relationship.key).to.equal('templates');
        expect(relationship.kind).to.equal('hasMany');
    });


    // --- Relationships ---
    it('it hasMany services relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('services');

        expect(relationship.key).to.equal('services');
        expect(relationship.kind).to.equal('hasMany');
    });


    // --- Relationships ---
    it('it hasMany homepages relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('events');

        expect(relationship.key).to.equal('events');
        expect(relationship.kind).to.equal('hasMany');
    });


    // --- Computed Properties ---
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
