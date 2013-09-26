# brunch-with-ember-sideloaded#
This repo is meant to be used as [Brunch](http://brunch.io) skeleton for developing [Ember](http://emberjs.com) applications based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

But first, a little history ... in the beginning there was `brunch-with-ember`, then there was `brunch-with-ember-reloaded` (written by [@gcollazo](https://github.com/gcollazo/brunch-with-ember-reloaded)), and then I came round and decided that I wasn't cool enough to use CoffeeScript so I've forked and modified my way to `brunch-with-ember-sideloaded` which takes @gcollazo's great skeleton and makes it JavaScript focused and also replaces `Stylus` with `Less`. So ... if you're eager to try out Ember but don't want to tackle CoffeeScript just yet, this might be your skeleton. 


## Demo
Demo application to come soon.

## Versions
- [Ember v1.0.0](http://emberjs.com) - managed by `Bower`.
- [Ember-Data v1.0-beta2](https://github.com/emberjs/data) - managed by `Bower`.
- [Handlebars 1.0.0](http://handlebarsjs.com) - managed by `Bower`.
- [jQuery v2.0.3](http://jquery.com) - managed by `Bower`.
- [Twitter Bootstrap v2.3.2](http://twitter.github.io/bootstrap/) - managed by `Bower`.
- [Moment 2.1.0](http://momentjs.com/) - managed by `Bower`.
- [Select2](http://ivaynberg.github.io/select2/) - managed by `Bower`.
- [HTML5 Boilerplate v4.2.0](http://html5boilerplate.com)

## Features
- **Less** - Expressive, dynamic, robust CSS pre-processor.
- **auto-reload-brunch** - Adds automatic browser reloading support to brunch.
- **ember-handlebars-brunch** - Adds automatic handlebars pre-compiling
- **uglify-js-brunch** - Adds UglifyJS support to brunch.

## Getting started

```
brunch new git@github.com:ksnyde/brunch-with-ember-sideloaded.git <appname> 
cd <appname>
brunch watch -s
```
Open [http://localhost:3333](http://localhost:3333) on your browser. Note ... if you don't already have `bower` installed you'll want to install that first. To install bower just
type `npm install -g bower`. Presto. Done. Now you're ready to have brunch.

## Dependency Automation ##
The primary mechanism for managing dependencies is now `Bower` although because Ember-Data is still being updated with a high frequency and the Bower package doesn't include the `/dist` folder without manually building it I have opted instead to include a `cake` automation described below. All other vendor dependencies are now managed by `Bower`.

### Ember-Data Updates ###
There's a  cake task to download Ember Data from [builds.emberjs.com](http://builds.emberjs.com) and copy it to your `vendor/scripts` directory.

```
cake getemberdata					→ get latest build of Ember-Data
```

### Bower Integration ###
As of this version of the skeleton there is integration with the [Bower](http://bower.io) package manager. To use this you must make sure you have a recent version of brunch -- just type `npm install -g brunch` and you'll get the latest version -- and then have Bower installed which is achieved with `npm install -g bower`. Once that is done you're all set to take all the benefits of Bower. The key commands you'll be interested in are:

```
bower list			will list all of the Bower dependencies and what version they are on (including a reference to possible upgrades where applicable)
bower clear-cache	this will clear the Bower cache and the specified package caches (and is the first step in a update)
bower update		this will update all the dependencies to the latest version that meets the dependency rules in the `bower.json` file
```

#### Bower Modules ####
The specific modules and versions are listed above in the "versions" section.



## Generators ##
This skeleton makes use of [scaffolt](https://github.com/paulmillr/scaffolt#readme) generators to help you create common files quicker. To use first install skaffolt globally with `npm install -g scaffolt`. Then you can use the following command to generate files.

```
scaffolt model <name> 				→ app/models/			Name.coffee
scaffolt view <name>				→ app/views/			NameView.coffee
scaffolt controller <name> 			→ app/controllers/		NameController.coffee
scaffolt arraycontroller <name>		→ app/controllers/		NamesController.coffee
scaffolt route <name> 				→ app/routes/			NameRoute.coffee
scaffolt template <name> 			→ app/templates			name.hbs
```
There's a few more commands you can use with scaffolt and also instruction on how to create your own generators, so make sure you check out the [docs](https://github.com/paulmillr/scaffolt#readme).

### Testing
You can write your tests in the `test` folder, just make sure they are named `*_test.js`. You can customize the test to user PhantomJS, Chrome, Firefox, Safari or Opera on the `karma.conf.js` file in the root directory. There's a lot of other settings there as well. Run tests with:

```
karma start
```

For a great screencast on testing with Ember take a look at: Toran Billups' [Integration Testing Your emberjs App with QUnit and Karma](http://toranbillups.com/blog/archive/2013/07/21/Integration-testing-your-emberjs-app-with-QUnit-and-Karma/).

## License
All of brunch-with-ember-sideloaded is licensed under the MIT license.

Copyright (c) 2013 Kenneth Snyder

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.