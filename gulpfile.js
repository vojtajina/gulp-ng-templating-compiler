var gulp = require('gulp');
var ngTemplates = require('./index');
var traceur = require('gulp-traceur');
var through = require('through2');

function rename(search, replace) {
  return through.obj(function(file, enc, cb) {
    file.path = file.path.replace(search, replace);
    this.push(file);
  });
}

gulp.task('test_build', function() {
  gulp.src('./test/*.html')
      .pipe(ngTemplates())
      .pipe(traceur({}))
      .pipe(rename(/html$/, 'js'))
      .pipe(gulp.dest('test/build/'));
});
