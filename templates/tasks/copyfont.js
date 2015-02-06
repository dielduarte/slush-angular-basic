
var gulp   = require('gulp');


//task for copy fonts dev to build
gulp.task('copyfont',['copyfontaweome'], function(){
  return gulp.src('./dev/app/assets/fonts/*.*')
    .pipe(gulp.dest('./public/assets/fonts'));
});

gulp.task('copyfontaweome', function(){
	return gulp.src('./bower_components/fontawesome/fonts/*.*')
    	.pipe(gulp.dest('./public/assets/fonts'));
});
