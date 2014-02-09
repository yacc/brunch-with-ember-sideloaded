# brunch-with-ember-sideloaded#
This repo is meant to be used as [Brunch](http://brunch.io) skeleton for developing [Ember](http://emberjs.com) applications based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

But first, a little history ... in the beginning there was `brunch-with-ember`, then there was `brunch-with-ember-reloaded` (written by [@gcollazo](https://github.com/gcollazo/brunch-with-ember-reloaded)), and then I came round and decided that I wasn't cool enough to use CoffeeScript so I've forked and modified my way to `brunch-with-ember-sideloaded` which takes @gcollazo's great skeleton and makes it JavaScript focused and also replaces `Stylus` with `Less`. So ... if you're eager to try out Ember but don't want to tackle CoffeeScript just yet, this might be your skeleton. 

## Versions

###Major Components
- [Ember v1.4.0-beta.3](http://emberjs.com) 
- [Ember-Data v1.0-beta.5](https://github.com/emberjs/data) 
- [Handlebars 1.3.0](http://handlebarsjs.com) 
- [jQuery v2.0.3](http://jquery.com) 

###A Few Handy Add-ons
- [Twitter Bootstrap 3](http://twitter.github.io/bootstrap/) - needs no introduction
- [Bootstrap for Ember](https://github.com/ember-addons/bootstrap-for-ember) - bringing Bootstrap goodness to Ember
- [Fontawesome 4](http://fontawesome.io/) - fonts are good but fonts of icons? ... Awesome
- [Moment 2.x](http://momentjs.com/) - useful Time/Date library
- [Swag 1.5](http://elving.github.io/swag/) - handlebars templates
- [Lo-Dash 2.4](http://lodash.com/docs) - utility library

###HTML Infrastructure
- [HTML5 Boilerplate v4.2.0](http://html5boilerplate.com) - basic HTML starting template 
- [Modernizer](http://modernizr.com/) - feature detection
- [Normalize.css](http://necolas.github.io/normalize.css/) - make browsers behave
- [JQuery Cookie](https://github.com/carhartl/jquery-cookie) - make setting/getting cookies simple

## Features
- **Less** - Expressive, dynamic, robust CSS pre-processor.
- **auto-reload-brunch** - Adds automatic browser reloading support to brunch.
- **ember-handlebars-brunch** - Adds automatic handlebars pre-compiling
- **uglify-js-brunch** - Adds UglifyJS support to brunch.

## Getting started
###Pre-requisites 
You must have `npm`, `bower` and `brunch` installed and it is recommended to install `scaffolt` as well. As bower, brunch and scaffolt are managed with `npm` you must install this first. 

- Install npm: [https://github.com/npm/npm](https://github.com/npm/npm)

Once that is done installing bruch and scaffolt is as easy as:

1. `npm -g install bower`
1. `npm -g install brunch`
1. `npm -g install scaffolt`

###Using this brunch template
Now that all the dependencies are out of the way, just go to your terminal and change directories to the root of where you want to install you new ember application and type the following:

```
brunch new git@github.com:ksnyde/brunch-with-ember-sideloaded.git <appname> 
cd <appname>
brunch watch -s
```
Open [http://localhost:3333](http://localhost:3333) on your browser. Note ... if you don't already have `bower` installed you'll want to install that first. To install bower just
type `npm install -g bower`. Presto. Done. Now you're ready to have brunch.


## Generators ##
This skeleton makes use of [scaffolt](https://github.com/paulmillr/scaffolt#readme) generators to help you create common files quicker. To use first install skaffolt globally with `npm install -g scaffolt`. Then you can use the following command to generate files.

```
scaffolt model <name> 				→ app/models/			Name.js
scaffolt view <name>				→ app/views/			NameView.js
scaffolt component <name>			→ app/components/		NameView.js
scaffolt controller <name> 			→ app/controllers/		NameController.js
scaffolt arraycontroller <name>		→ app/controllers/		NamesController.js
scaffolt route <name> 				→ app/routes/			NameRoute.js
scaffolt object <name> 				→ app/objects			Name.hbs
scaffolt template <name> 			→ app/templates			name.hbs
```
There's a few more commands you can use with scaffolt and also instruction on how to create your own generators, so make sure you check out the [docs](https://github.com/paulmillr/scaffolt#readme).

## Authentication ##

The number of applications that *don't* need authenication are becoming fewer and fewer and going through the steps of setting up your own solution is cumbersome and unnecessary. I have now included Simplabs' `ember-simple-auth` as a bower package and have taken some basic steps to get it setup for you "out of the box" (or at least darn close). The documentation that is provided ([github](https://github.com/simplabs/ember-simple-auth), [docs](http://ember-simple-auth.simplabs.com/api.html)) are very well written and you should go through these before anything else. With the setup guide read, you should now look at the source that comes with this brunch receipe and you'll see that most of the mixins needed to start using this are already in place. I have also extended the `Ember.SimpleAuth.Autheicators.OAuth2` object (find it in  `/objects/CustomAuthenticator`) but I've set the properties to the default values. This is just so you can modify these more easily. 

## Testing
You can write your tests in the `test` folder, just make sure they are named `*_test.js`. You can customize the test to user PhantomJS, Chrome, Firefox, Safari or Opera on the `karma.conf.js` file in the root directory. There's a lot of other settings there as well. Run tests with:

```
karma start
```

For a great screencast on testing with Ember take a look at: Toran Billups' [Integration Testing Your emberjs App with QUnit and Karma](http://toranbillups.com/blog/archive/2013/07/21/Integration-testing-your-emberjs-app-with-QUnit-and-Karma/).


##Other Goodies

###JSHinting
If you like to run JSHint/Lint on your code -- and come on, you *do* like doing it right? -- then you'll be happy to know that the 
scaffolt library already has JSHinting included so that you don't have contend with a bunch of "non issues". For instance, a controller might start with the following definition:

	/*jslint browser: true, jquery: true */ 
	/*global App: true, require: false, Ember: false, module: false, console:false*/

This should already be pretty good but if you have any improvements send me a PR and I'll incorporate it in.

###Textmate Properties
There is a `.tm_properties` file at the root of the template that will instruct Textmate (if you use it) to only look in the right places for files. 

###Comprehensive Logging
By default apps built with this template will log **lots** of information to the console for debugging purposes. This is all found in the `app.js` file and can be turned off if and where desired.

## Dependency Automation ##

As of this version of the skeleton there is 100% integration with the [Bower](http://bower.io) package manager. The key commands you'll be interested in are:

```
bower list			will list all of the Bower dependencies and what version they are on (including a reference to possible upgrades where applicable)
bower clear-cache	this will clear the Bower cache and the specified package caches (and is the first step in a update)
bower update		this will update all the dependencies to the latest version that meets the dependency rules in the `bower.json` file
```


## License
All of brunch-with-ember-sideloaded is licensed under the MIT license.

Copyright (c) 2013 Kenneth Snyder

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.