import Ember from 'ember';

export default Ember.Component.extend({
    menu: [{
        'title': 'Index',
        'link': 'index'
    }, {
        'title': 'Feed',
        'link': 's.feed'
    }, {
        'title': 'Media',
        'link': 's.media'
    }, {
        'title': 'Posts',
        'link': 's.posts'
    }, {
        'title': 'Users',
        'link': 's.users',
        'submenu': [{
            'title': 'Index',
            'link': 's.users.index'
        }, {
            'title': 'Create New User',
            'link': 's.users.create'
        }]
    }, {
        'title': 'Templates',
        'link': 's.templates',
        'submenu': [{
            'title': 'Index',
            'link': 's.templates.index'
        }, {
            'title': 'Create New Template',
            'link': 's.templates.create'
        }]
    }, {
        'title': 'Vendors',
        'link': 's.vendors',
        'submenu': [{
            'title': 'Index',
            'link': 's.vendors.index'
        }, {
            'title': 'Create Vendor',
            'link': 's.vendors.create'
        }, ]
    }, {
        'title': 'Homepages',
        'link': 's.homepages',
        'submenu': [{
            'title': 'Index',
            'link': 's.homepages.index'
        }, {
            'title': 'Create Homepage',
            'link': 's.homepages.create'
        }, ]
    }]
});
