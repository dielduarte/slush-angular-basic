
var gulp       = require('gulp'),
	  concat     = require('gulp-concat'),
	  rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate');

// Task for concat and minifier the *.js files
gulp.task('js', function() {
  return gulp.src([
  	'./app/modules/**/*.js',
    './app/config/**/*.js',
    './app/directives/**/*.js',
    './app/services/**/*.js',
    './app/factorys/**/*.js',
    './app/controllers/**/*.js'])
    .pipe(concat('main.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/assets/js/'));
});