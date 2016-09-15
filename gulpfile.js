const gulp = require('gulp');
const pug = require('gulp-pug');

const paths = {
  js: './src/js/*.js',
  sass: './src/sass/*.sass',
  pug: './src/*.pug',

  d_js: './dist/js',
  d_css: './dist/css',
  d_html: './dist',
};

gulp.task('pug', function () {
  return gulp.src(paths.pug)
    .pipe(pug())
    .pipe(gulp.dest(paths.d_html));
});

gulp.task('default', ['pug'], function () {
  console.log('watching for changes...');
  gulp.watch(paths.pug, ['pug']);
});
