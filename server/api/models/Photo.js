/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        // relationships
        user: {
            model: 'user'
        },
        album: {
            model:'album',
            via: 'photos'
        },

        // attr
        name: {
            type: 'string'
        },
        filePath: {
            type: 'string'
        },
        thumbPath : {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        tags : {
        	type: 'array'
        }
    }
};

