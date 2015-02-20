import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {

    	var userId = this.session.get('user.id');

        var near = {
            fieldName: "location",
            coordinates: [ -122.3481255 , 47.6281998 ],
            maxDistance: 4000
        };

        return this.store.find('vendor', {user: userId, near: near});
    }
});
