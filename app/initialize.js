// Namespace
// App = require 'app' (need to look into this before implmenting)


// ===== Router =====
App.Router.map(function() {

	this.resource('index', { path: '/' }, function() {});
	this.resource('foo', { path: '/foo' }, function() {});
	this.resource('bar', { path: '/bar' }, function() {});
	
});

// ===== Routes =====
require 'routes/IndexRoute';


// ===== Store =====


// ===== Models =====


// ===== Views =====


// ===== Controllers =====


// ===== Template Helpers =====


// ===== Templates =====
require 'templates/application';
require 'templates/index';
