# brunch-with-ember-sideloaded#
This repo is meant to be used as [Brunch](http://brunch.io) skeleton for developing [Ember](http://emberjs.com) applications based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

But first, a little history ... in the beginning there was `brunch-with-ember`, then there was `brunch-with-ember-reloaded` (written by [@gcollazo](https://github.com/gcollazo/brunch-with-ember-reloaded)), and then I came round and decided that I wasn't cool enough to use CoffeeScript so I've forked and modified my way to `brunch-with-ember-sideloaded` which takes @gcollazo's great skeleton and makes it JavaScript focused and also replaces `Stylus` with `Less`. So ... if you're eager to try out Ember but don't want to tackle CoffeeScript just yet, this might be your skeleton. 


## Demo
Demo application to come soon.

## Versions
- [Ember v1.0.0-rc.6](http://emberjs.com) - automatically updated by running `cake getember`
- [Ember-Data v0.13](https://github.com/emberjs/data) - automatically update by running `cake getemberdata`
- [Handlebars 1.0.0-rc.4](http://handlebarsjs.com) - no automatic update but will have to keep in sync w/ Ember
- [jQuery v1.9.1](http://jquery.com) - managed by `Bower`.
- [Twitter Bootstrap v2.3.2](http://twitter.github.io/bootstrap/) - managed by `Bower`.
- [Moment 2.1.0](http://momentjs.com/) - managed by `Bower`.
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
Open [http://localhost:3333](http://localhost:3333) on your browser.

## Dependency Automation ##
There are two ways that external depencies to your Ember app can be kept up-to-date. The Ember specific dependencies (aka, Ember, Ember-Data, and Handlebars) are still kept current by using the `cake` automation described below. All other vendor dependencies are now managed by `Bower`. This seperation is only due to the fact that Ember is still in a very actively changed state and therefore the frequency with which you may be updating the two types of dependencies will vary. I will likely change all depenencies to use the `Bower` package manager at some future points and am open to people comments on this.

### Ember Updates ###
There's a  cake task to download the Ember and Ember Data from [builds.emberjs.com](http://builds.emberjs.com) and copy it to your `vendor/scripts` directory.

```
cake getember						→ get latest build of core Ember
cake getemberdata					→ get latest build of Ember-Data
```

The version of handlebars that works with Ember seems to be a bit sensitive at the moment so for now this is still manual (currently using RC4). Will definately look for a better solution going forward and open to any ideas folks have.

### Bower Integration ###
As of this version of the skeleton there is integration with the [Bower](http://bower.io) package manager. To use this you must make sure you have a recent version of brunch -- just type `npm install -g brunch` and you'll get the latest version -- and then have Bower installed which is achieved with `npm install -g bower`. Once that is done you're all set to take all the benefits of Bower. The key commands you'll be interested in are:

```
bower list			will list all of the Bower depenencies and what version they are on (including a reference to possible upgrades where applicable)
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
You can write your tests in the `test` folder, just make sure they are named `*_test.coffee`. You can customize the test to user PhantomJS, Chrome, Firefox, Safari or Opera on the `test/karma.conf.js` file. There's a lot of other settings there as well. Run tests with:

```
cake test
```

## License
All of brunch-with-ember-sideloaded is licensed under the MIT license.

Copyright (c) 2013 Kenneth Snyder

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.