var gulp   = require('gulp');

// Task for copy images
gulp.task('copyimage',function () {
  return gulp.src('./app/assets/img/*.*')
    .pipe(gulp.dest('./public/assets/img'));
});