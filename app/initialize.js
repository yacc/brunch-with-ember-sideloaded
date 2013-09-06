/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

// ===== Namespace =====
window.App = require ('app');


// ===== Router =====
App.Router.map(function() {

	this.resource('index', { path: '/' }, function() {});
	this.resource('foo', { path: '/foo' }, function() {});
	this.resource('bar', { path: '/bar' }, function() {});
	
});

// ===== Routes =====


// ===== Store =====


// ===== Models =====


// ===== Views =====


// ===== Controllers =====


// ===== Template Helpers =====


// ===== Templates =====
require ('templates/application');
