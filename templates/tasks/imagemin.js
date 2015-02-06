
var gulp   = require('gulp'),
imagemin   = require('gulp-imagemin');



// Task for minifier the images
gulp.task('imagemin',function () {
  return gulp.src('./dev/app/assets/img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/assets/img'));
});