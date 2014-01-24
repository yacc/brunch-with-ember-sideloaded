/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

// ===== Namespace =====
window.App = require ('app');


// ===== Router =====
App.Router.map(function() {

	this.resource('index', { path: '/' }, function() {});
	
});

// ===== Routes =====


// ===== Controllers =====
require('controllers/ApplicationController');

// ===== Store =====


// ===== Models =====


// ===== Views =====



// ===== Template Helpers =====


// ===== Templates =====
require ('templates/application');
