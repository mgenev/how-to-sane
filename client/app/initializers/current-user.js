
export var initialize = function(container) {
    // var user = container.lookup('simple-auth-session:main').get('user')[0];

    // container.register('user:current', user, {
    //     instantiate: false,
    //     singleton: true
    // });
    // container.injection('route', 'currentUser', 'user:current');
    // container.injection('controller', 'currentUser', 'user:current');
    // container.injection('view', 'currentUser', 'user:current');
    // container.injection('component', 'currentUser', 'user:current');
};

export default {
    name: 'current-user',
    after: ['simple-auth'],    
    initialize: initialize
};
