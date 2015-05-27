var gulp   = require('gulp');

gulp.task('watch',function(){
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/assets/scss/**/*.scss', ['css']);
    gulp.watch('app/views/**/*.jade', ['jade']);
    gulp.watch('app/index.jade', ['copyindex'])
});