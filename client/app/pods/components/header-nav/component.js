import Ember from 'ember';

export default Ember.Component.extend({
    menu: [{
        'title': 'Index',
        'link': 'index'
    }, {
        'title': 'Feed',
        'link': 'feed'
    }, {
        'title': 'Media',
        'link': 'media'
    }, {
        'title': 'Posts',
        'link': 'posts'
    }, {
        'title': 'Users',
        'link': 'users',
        'submenu': [{
            'title': 'Index',
            'link': 'users.index'
        }, {
            'title': 'Create New User',
            'link': 'users.create'
        }]
    }, {
        'title': 'Templates',
        'link': 'templates',
        'submenu': [{
            'title': 'Index',
            'link': 'templates.index'
        }, {
            'title': 'Create New Template',
            'link': 'templates.create'
        }]
    }, {
        'title': 'Vendors',
        'link': 'vendors',
        'submenu': [{
            'title': 'Index',
            'link': 'vendors.index'
        }, {
            'title': 'Create Vendor',
            'link': 'vendors.create'
        }, ]
    }, {
        'title': 'Homepages',
        'link': 'homepages',
        'submenu': [{
            'title': 'Index',
            'link': 'homepages.index'
        }, {
            'title': 'Create Homepage',
            'link': 'homepages.create'
        }, ]
    }]
});
