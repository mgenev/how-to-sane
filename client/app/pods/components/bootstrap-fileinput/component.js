import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
    	var _this = this;
        $("#input-id").fileinput({
            uploadUrl: this.get('url'),
            uploadExtraData: function() {

            	var obj = {};
            	var tempObj = {};

            	tempObj[_this.get('associationType')] = _this.get('extraData');
                obj['extra'] = JSON.stringify(tempObj);

                return obj;
            },
            multiple: true
        });
    }
});
