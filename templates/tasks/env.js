var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var fs = require('fs');
var colors = require('colors');
var rename = require('gulp-rename');
var minimist = require('minimist');

// Environment setup
var knownOptions = {
  string: 'env',
  default: {
    // Default environment is production
    env: process.env.APP_ENV || 'production'
  }
};

var options = minimist(process.argv.slice(2), knownOptions);
var env = options.env;

gulp.task('env', function () {
  var file = 'env-'+env+'.json';

  fs.stat('app/env-local.json', function (err) {
    // Default env file is local
    if (err == null) {
      file = 'env-local.json';
    }

    console.log(colors.black.bgGreen(file));

    gulp.src('./app/'+file)
      .pipe(gulpNgConfig('env'))
      .pipe(rename('env.js'))
      .pipe(gulp.dest('./app/common/config/'));
  });
});
