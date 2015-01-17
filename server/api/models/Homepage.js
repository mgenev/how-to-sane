/**
 * Homepage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        // relationships
        template: {
            model: 'template'
        },
        vendor: {
            model: 'vendor'
        },

        // attr
        title: {
            type: 'string',
            required: true
        },
        pageContent: {
            type: 'string'
        },
        templateName: {
            type: 'string'
        },
        urlSegment: {
            type: 'string'
        }
    }
};
