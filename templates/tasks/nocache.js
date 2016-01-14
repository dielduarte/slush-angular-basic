var gulp = require('gulp');
var CacheBuster = require('gulp-cachebust');

var cachebust = new CacheBuster();

gulp.task('nocache-css', function () {
  return gulp.src('build/assets/css/main.min.css')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('nocache-js', function () {
  return gulp.src('build/scripts/app.min.js')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('nocache-vendors-js', function () {
  return gulp.src('build/scripts/vendors.min.js')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/scripts/'));
});


gulp.task('nocache-vendors-css', function () {
  return gulp.src('build/css/vendors.min.css')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('nocache', ['nocache-css', 'nocache-js', 'nocache-vendors-js', 'nocache-vendors-css'], function () {
  return gulp.src('build/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('build/'));
});
