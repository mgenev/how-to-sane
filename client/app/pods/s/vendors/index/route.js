import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {

    	var userId = this.session.get('user.id');

        var near = {
            fieldName: "location",
            coordinates: [ -122.36158340000003 , 47.620633700000006 ],
            maxDistance: 6000
        };
        console.log('jfasjf');
        // return this.store.find('vendor', {user: userId, near: near});
        return this.store.find('vendor', {user: userId, near: near});
    }
});
