var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var expect = require('gulp-expect-file');
var minifyCSS = require('gulp-minify-css');

var files = [
  'bower_components/angular/angular.min.js',
  'bower_components/angular/angular.min.js.map',
  'bower_components/angular-route/angular-route.min.js',
  'bower_components/angular-route/angular-route.min.js.map',
  'bower_components/angular-sanitize/angular-sanitize.min.js',
  'bower_components/angular-sanitize/angular-sanitize.min.js.map',
  'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js'
];

var styles = [
  'bower_components/angular-toastr/dist/angular-toastr.min.css'
];

var EXTERNAL_FONTS = [
  //your external fonts
];

gulp.task('build-vendors', ['build-vendors-css', 'build-vendors-fonts'], function () {
  gulp.src(files)
    .pipe(expect({ errorOnFailure: true }, files))
    .pipe(gulpif(/[.]js$/, concat('vendors.js')))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('build-vendors-css', function(){
  gulp.src(styles)
    .pipe(expect({ errorOnFailure: true }, styles))
    .pipe(gulpif(/[.]css$/, concat('vendors.css')))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/assets/css/'));
});


gulp.task('build-vendors-fonts', function(){
  gulp.src(EXTERNAL_FONTS)
    .pipe(expect({ errorOnFailure: true }, EXTERNAL_FONTS))
    .pipe(gulp.dest('./build/assets/fonts/'));
});













