/**
 * Event.js
 *
 * @description :: Event model including many to many with users and belongs to a vendor.
 *                 Soon to include a location.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        vendor: {
            model: 'vendor'
        },

        users: {
            collection: 'user',
            via: 'events'
        },
        // TODO: add images
        // attributes
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        address: {
            type: 'string',
            required: true
        },
        eventDate: {
            type: 'datetime',
            required: true
        }
    }
};
