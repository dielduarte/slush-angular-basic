var gulp    = require('gulp'),
minifyCSS   = require('gulp-minify-css'),
concat      = require('gulp-concat'),
rename      = require('gulp-rename'),
sass        = require('gulp-sass'),
cssGlobbing = require('gulp-css-globbing');



// Task for concat and minfier  and convert sass to css files 
gulp.task('css', function() {

  gulp.src('./dev/app/assets/scss/main.scss')
  	.pipe(cssGlobbing({ extensions: ['.css', '.scss'] }))
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(minifyCSS(opts))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/assets/css'));
});