
var gulp       = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    jade       = require('gulp-jade');

gulp.task('copyindex', function() {
  var opts = {comments:true};

  gulp.src('./dev/app/index.jade')
    .pipe(jade({pretty: true}))  
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'))
});
