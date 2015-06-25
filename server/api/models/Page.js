/**
* Pages.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    title : { type: 'string' },

    slug : { type: 'string' },

    navLabel : { type: 'string' },

    layout : { type: 'string' },

    content1 : { type: 'string' },

    content2 : { type: 'string' },

    order : { type: 'float' }
  }
};

