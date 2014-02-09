/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.AuthenticatedRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin,{
  
	model: function(params) {

	}, 
		
	// Action Handlers
	actions: {
	
	}
  
});
