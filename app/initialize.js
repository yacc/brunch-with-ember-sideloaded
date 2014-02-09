/*jslint browser: true, jquery: true */ 
/*global App: true, require: false*/

// ===== Namespace =====
window.App = require ('app');


// ===== Objects =====


// ===== Router =====
App.Router.map(function() {
	this.route('login');
	this.resource('index', { path: '/' }, function() {});
});

// ===== Routes =====
require('routes/ApplicationRoute');
require('routes/AuthenticatedRoute'); // any routes that extend this will require logging in

// ===== Controllers =====
require('controllers/IndexController');

// ===== Store =====


// ===== Models =====


// ===== Views =====



// ===== Template Helpers =====


// ===== Templates =====
require ('templates/application');
require ('templates/index');
require ('templates/login');

