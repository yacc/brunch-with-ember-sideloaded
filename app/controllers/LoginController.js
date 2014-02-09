/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.LoginController = Ember.ObjectController.extend(Ember.SimpleAuth.LoginControllerMixin,{
	username:null,
	password:null,
	rememberMe:false,
	isReadyToLogin: function() {
		if( !Ember.isEmpty(this.get('username')) && !Ember.isEmpty(this.get('password')) ) {
			return true;
		} else {
			return false;
		}
	}.property('username','password'),


	// Actions Handler
	actions: {
	
	}

});