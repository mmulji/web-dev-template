'use strict';

// Imports
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');

// Source files
var lessFiles = './source/**/*.less';
var jsFiles = './source/**/*.js';

// Target directories
var cssDir = './site/css';
var jsDir = '.site/js';


/* -- CSS related -- */

gulp.task('less', function() {
  return gulp.src(lessFiles)
    .pipe(less())
    .pipe(gulp.dest(cssDir));
});


gulp.task('csslint', function() {
  gulp.files(cssDir)
    .pipe(csslint())
    .pipe(csslint.reporter()) // Display errors
    .pipe(csslint.reporter('fail')); // Fail on error (or csslint.failReporter())
});


gulp.task('cssminify', function() {
  return gulp.src(lessFiles)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDir));
});


/* -- JS related -- */

gulp.task('jsuglify', function() {
  return gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


/* -- Utility Tasks -- */
gulp.task('clean', [''], function() {
  // todo ...
});


/* -- Tests -- */
gulp.task('test', [''], function() {
  // todo ...
});


/* -- Default, Development & "Release" Releases -- */

gulp.task('default', ['dev'], function() {});
gulp.task('dev', ['less', 'cssminify'], function() {});
gulp.task('release', ['csslint', 'cssminify', 'uglifyjs'], function() {});


/* -- Serve pages, start browser with live reload -- */

gulp.task('serve', [], function() {
  // todo ...
});
