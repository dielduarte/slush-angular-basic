var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['js', 'refresh']);
  gulp.watch('app/assets/scss/**/*.scss', ['css', 'refresh']);
  gulp.watch('app/**/*.jade', ['jade', 'refresh']);
});
