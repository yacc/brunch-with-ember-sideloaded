/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.ApplicationController = Ember.ObjectController.extend({
	showDetails : false,
	
	actions: {
		detailsToggle: function() {
			this.set('showDetails',!this.get('showDetails'));
		}
	}
}); 