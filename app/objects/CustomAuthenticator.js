/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.CustomAuthenticator = Ember.SimpleAuth.Authenticators.OAuth2.extend({
	serverTokenEndpoint: "/api/oauth2/user_credentials",
	refreshAccessTokens: true,
	
    makeRequest: function(data) {
      data.client_id = 1; // TODO: look into something more graceful than hard-coding this here; might be ok but not convinced
      return this._super(data);
    },

	actions: {

	}
	
});