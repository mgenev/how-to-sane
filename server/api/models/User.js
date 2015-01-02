var bcrypt = require('bcrypt');

/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

 module.exports = {

 	attributes: {
 		firstName: 'STRING',
 		lastName: 'STRING',
 		age: {
 			type: 'INTEGER',
 			max: 150,
 			min: 0
 		},
 		phoneNumber: 'STRING',
 		username: {
			type: 'EMAIL', // Email type will get validated by the ORM
			required: true,
            unique: true
		},
		userType: {
			type: 'INTEGER',
			defaultsTo: 0
			// 0=regularuser
			// 1=advanceduser
			// 2=minimalAdmin
			// 3=fullAdmin
		},
		password: {
	    	type: 'string',
	    	required: true
	    },
		fullName: function() {
		    return this.firstName + ' ' + this.lastName;
	    },
	    isAdmin: function(){
	    	return this.userType == 3;
	    },
	    userAccess: function(){
	    	switch(this.userType){
	    		case 1: return "Privlidged User";
	    		case 2: return "Administrator";
	    		case 3: return "Privlidged Administrator";
	    		default: return "User";
	    	}
	    },
	    toJSON: function() {
	    	var obj = this.toObject();
	        // Remove the password object value
	        delete obj.password;
	        // return the new object without password
	        return obj;
	    }
	},
	beforeCreate: function(user, cb) {
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(user.password, salt, function(){}, function(err, hash) {
				if (err) {
					console.log(err);
					cb(err);
				}else{
					user.password = hash;
					cb(null, user);
				}
			});
		});
	}
};
