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
    'title': 'Events',
    'link': 's.events'
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
      // }, {
      // 'title': 'Templates',
      // 'link': 's.templates',
      // 'submenu': [{
      //     'title': 'Index',
      //     'link': 's.templates.index'
      // }, {
      //     'title': 'Create New Template',
      //     'link': 's.templates.create'
      // }]
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
    'title': 'Page Manager',
    'link': 's.page-manager',
    'submenu': [{
        'title': 'List Pages',
        'link': 's.page-manager.index'
      }, {
        'title': 'Create New Page',
        'link': 's.page-manager.new'
      }]
      // }, {
      //     'title': 'Homepages',
      //     'link': 's.homepages',
      //     'submenu': [{
      //         'title': 'Index',
      //         'link': 's.homepages.index'
      //     }, {
      //         'title': 'Create Homepage',
      //         'link': 's.homepages.create'
      //     }, ]
  }],
  didInsertElement() {
    $('.mobile-menu').css('padding-right', "15px");
    $('.mobile-menu').on('shown.bs.collapse', () => {
      $(document).on('click', this.hideMenu);
    });

    $('.mobile-menu').on('hidden.bs.collapse', () => {
      $(document).unbind("click", this.hideMenu);
    });
  },

  hideMenu() {
    $('.mobile-menu').collapse('hide');
  },

  actions: {
    invalidateSession() {
      this.sendAction('invalidateSession');
    },
    back() {
      this.sendAction('back');
    },
    forward() {
      this.sendAction('forward');
    }
  }
});
