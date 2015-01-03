import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource('posts', function() {
        this.route('post', {
            path: ':post_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.resource('templates', function() {
        this.route('template', {
            path: ':template_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.route('media', function() {
        this.route('upload', {
            path: 'upload'
        });
    });

    this.resource('albums', function() {
        this.route('album', {
            path: ':album_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.resource('photos', function() {
        this.route('photo', {
            path: ':photo_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.resource('users', function() {
        this.route('user', {
            path: ':user_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.route('feed', function() {
        this.route('status', {
            path: 'status'
        });
    });

    this.resource('vendors', function() {
        this.route('vendor', {
            path: ':vendor_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.resource('homepages', function() {
        this.route('homepage', {
            path: ':homepage_id'
        });

        this.route('create', {
            path: 'create'
        });
    });

    this.route('login');
});

export default Router;
