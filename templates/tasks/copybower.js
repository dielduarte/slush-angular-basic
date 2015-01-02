var gulp   = require('gulp');

gulp.task('copybower', function(){
	return gulp.src(['bower_components/**'])
		.pipe(gulp.dest('./public/bower_components'));
});
