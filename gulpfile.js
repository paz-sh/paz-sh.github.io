var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var babel = require('gulp-babel');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('es6', function() {
  gulp.src('src/es6/**/*.es6')
      .pipe(babel())
      .pipe(rename({ extname: '.js' }))
      .pipe(gulp.dest('js'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({livereload: true}));
});

gulp.task('default', ['css', 'es6', 'serve'], function() {
  gulp.watch(['./src/css/*'], ['css']);
  gulp.watch(['./src/es6/*'], ['es6']);

});
