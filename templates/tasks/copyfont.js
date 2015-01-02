
var gulp   = require('gulp');


//task for copy fonts dev to build
gulp.task('copyfont', function(){
  return gulp.src('./dev/app/assets/fonts/*.*')
    .pipe(gulp.dest('./public/assets/fonts'));

});
