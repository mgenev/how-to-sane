import Ember from 'ember';

export default Ember.Controller.extend({
    steps: [{
        caption: 'Post your message',
        component: 'status-note'
    }, {
        caption: 'Post what you are doing',
        component: 'status-activity'
    }, {
        caption: 'Tell us how you feel',
        component: 'status-state-picker'
    }]
});
