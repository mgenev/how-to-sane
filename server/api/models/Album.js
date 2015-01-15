/**
* Albums.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	name: {
        type: 'string'
    },
    description: {
        type: 'string'
    },
    tags : {
    	type: 'array'
   	},
   	    
    // todo look up this kind of relationship in waterline
    photos: {         
        collection: 'photo'
    }
  }
};

