/*jslint browser: true, jquery: true */ 
/*global App: true, Ember: false, module: false, console: false, Bootstrap: true*/

// Application bootstrapper
module.exports = App = Ember.Application.createWithMixins(Bootstrap.Register,{
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
  LOG_STACKTRACE_ON_DEPRECATION : true,
  LOG_BINDINGS                  : true,
  LOG_VIEW_LOOKUPS              : true,
  LOG_ACTIVE_GENERATION         : true 
});

Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.setup(container, application);
  }
});

Ember.RSVP.configure('onerror', function(e) {
  console.log(e.message); 
  console.log(e.stack);
});

function ev(emberId){
  return Ember.View.views['ember' + emberId];
}
function ec(emberId){
  return ev(emberId).get('controller');
}