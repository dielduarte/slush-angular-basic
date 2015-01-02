var gulp   = require('gulp'),
minifyHTML = require('gulp-minify-html'),
jade       = require('gulp-jade');




//task for compile jada for html
gulp.task('jade', function() {
	var opts = {comments:true};

  gulp.src('./dev/app/views/**/*.jade')
    .pipe(jade({pretty: true}))  
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/views/'))
});