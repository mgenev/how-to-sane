import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        this._super(...arguments);
        $("#input-id").fileinput({
            uploadUrl: this.get('url'),
            uploadExtraData:() => {

              var obj = {};
              var tempObj = {};

              tempObj[this.get('associationType')] = this.get('extraData');
                obj['extra'] = JSON.stringify(tempObj);

                return obj;
            },
            multiple: true
        });
    }
});
