# Web development template

## Intro
I often find myself working on/with lots of different tools and workflows. For Web development, I've collected a mini sample project that does all the compiling, serving, testing and bits that you would expect in a typical web project.

A nice explanation of the tooling & workflow can be found [here](https://markgoodyear.com/2014/01/getting-started-with-gulp/).


The rest is upto you to do. :)

## Overview

### Project structure

- source
	- Contains all compiled and untranslated/unmangled html, image, css & js files. 
- target
	- Contains all compiled and translated html, image, css & js files. 
- test
	- Contains test scripts that you test your site.


### Installing
To start, run:

`npm install gulp -g`

`npm install && bower install`  


This installs all the development npm modules and bower components.

### Build script
The project contains a gulpfile.js that has the following tasks & task dependencies:

- less
- csslint
- cssminify
- jsuglify

Utility tasks:

- clean
	- Cleans the target directory of all generated css, html, js and image files.

Release tasks:

- default 
	- Does the dev build below
- dev
	- Makes a development release
- release
	- Makes a release, minifying and uglifying css and js

Thanks to everyone who made great tools such as [npm](https://www.npmjs.com) (+ plugins), [bower](http://bower.io) (+ components) and all the other bits and pieces that make up what is known as modern web development, such as wonderful place.
