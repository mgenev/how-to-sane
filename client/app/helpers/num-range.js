import Ember from 'ember';

function numRange(start, count) {	
    var ret = [];
    for (var i = start; i < count; i++) {

    	console.log('y u no run');
        ret.push(i + start);
    }
    
    return ret;
}

export default Ember.Handlebars.makeBoundHelper(numRange);
