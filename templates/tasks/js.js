
var gulp       = require('gulp'),
	  concat     = require('gulp-concat'),
	  rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate');

// Task for concat and minifier the *.js files
gulp.task('js', function() {
  return gulp.src([
  	'./dev/app/modules/**/*.js',
    './dev/app/config/**/*.js',
    './dev/app/directives/**/*.js',
    './dev/app/services/**/*.js',
    './dev/app/factorys/**/*.js',
    './dev/app/controllers/**/*.js'])
    .pipe(concat('main.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/assets/js/'));
});