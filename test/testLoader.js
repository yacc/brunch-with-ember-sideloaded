require('initialize');
Swag.registerHelpers();
App.setupForTesting();
App.injectTestHelpers();

// Application bootstrapper
module.exports = App = Ember.Application.createWithMixins(Bootstrap.Register,{
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
  LOG_STACKTRACE_ON_DEPRECATION : true,
  LOG_BINDINGS                  : true,
  LOG_VIEW_LOOKUPS              : true,
  LOG_ACTIVE_GENERATION         : true,
  
  ready: function() {
	  // regiser a singleton for Session management purposes
	  // this.register('session:current', App.Session, {singleton: true});
	  // inject the session into controllers and models
	  // this.inject('session:current','store','store:main');
	  // this.inject('controller','session','session:current');
	  // this.inject('model','session','session:current');
  }
  
});