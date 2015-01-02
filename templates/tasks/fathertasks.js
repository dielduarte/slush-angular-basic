var gulp   = require('gulp');


// Taks default gulp! 
gulp.task('default', function(){
	gulp.start('socialinfo:dev');
});


//task for build hotsite
gulp.task('socialinfo:build', [
          'copyindex',
          'copyimage', 
          'copyfont',
          'css',
          'js',
          'jade']);



//task for developer hotsite
gulp.task('socialinfo:dev', [
          'socialinfo:build',
          'watch']);


//task for prepare deploy
gulp.task('socialinfo:production',[
          'socialinfo:build',
          'imagemin']);