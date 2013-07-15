App.IndexRoute = Ember.Route.extend({

	// this may need refactoring ... just don't understand the pattern well enough.
	model: function() {
		return App.Activity.find();
	}

});