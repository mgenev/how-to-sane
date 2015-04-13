/**
 * Vendor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        // relationships
        services: {
            collection: 'service',
            via: 'vendor'
        },
        templates: {
            collection: 'template',
            via: 'vendor'
        },
        homepages: {
            model: 'homepage'
        },

        // TODO ideally the user should be many to many with vendor in the future so that different users
        // can be owners of a vendor and admin it

        user: {
            model: 'user'
        },

        // attributes
        name: {
            type: 'string'
        },
        location: {
            type: 'json'
        },        
        description: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        urlSegment: {
            type: 'string'
        },
        type: {
            type: 'string'
        }
    }

};
