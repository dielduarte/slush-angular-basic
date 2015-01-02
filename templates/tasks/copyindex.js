
var gulp       = require('gulp'),
    minifyHTML = require('gulp-minify-html');

gulp.task('copyindex', function() {
  var opts = {comments:true};

  gulp.src('./dev/app/index.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'))
});
