var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');
 
gulp.task('less', function () {
  gulp.src('app/styles/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/styles/'));
});



gulp.task('default', function () {
  gulp.run('less');
  gulp.watch('app/styles/less/main.less', function () {
    gulp.run('less');
  })
});