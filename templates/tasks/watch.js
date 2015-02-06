var gulp   = require('gulp');

gulp.task('watch',function(){
    gulp.watch('dev/app/**/*.js', ['js']);
    gulp.watch('dev/app/assets/scss/**/*.scss', ['css']);
    gulp.watch('dev/app/views/**/*.jade', ['jade']);
    gulp.watch('dev/app/index.jade', ['copyindex'])
});