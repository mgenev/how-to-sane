import Ember from 'ember';

function numRange(start, count) {	
    var ret = [];
    for (var i = start; i < count; i++) {
        ret.push(i + start);
    }
    
    return ret;
}

export default Ember.Handlebars.makeBoundHelper(numRange);
