# Web development template

## Intro
I often find myself working on/with lots of different tools and workflows. For Web development, I've collected a mini sample project that does all the compiling, serving, testing and bits that you would expect in a typical web project.

The rest is upto you to do. :)

## Overview

### Project structure

- source - Contains all less files, js in original form.
- target - Contains all compiled and translated css & js files. All html files for your site can be found here as well.
- test - Contains test scripts that you test your site.


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

- clean (todo)

Release tasks:

- default - Does the dev build below
- dev - Makes a development release
- release - Makes a release, minifying and uglifying css and js

Thanks to everyone who made such great tools such as npm (+ plugins), bower (+ components) and all the other bits and pieces that make up what is known as modern web development.
