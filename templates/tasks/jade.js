var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

gulp.task('jade', ['generate-index'], function () {
  var opts = {
    comments: true
  };

  gulp.src(['./app/**/*.jade', '!./app/index.jade'])
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/'))
});

gulp.task('generate-index', function () {
  gulp.src('./app/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/'))
});
