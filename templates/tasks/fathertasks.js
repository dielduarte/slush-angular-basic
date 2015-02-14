var gulp   = require('gulp');


// Taks default gulp! 
gulp.task('default', function(){
	gulp.start('dev');
});


//task for build 
gulp.task('build', [
          'copyindex',
          'copyimage', 
          'copyfont',
          'css',
          'js',
          'jade']);



//task for developer
gulp.task('dev', [
          'build',
          'watch']);


//task for prepare deploy
gulp.task('production',[
          'build',
          'imagemin']);