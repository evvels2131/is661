'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat'); // currently not used
const rename = require('gulp-rename');

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

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({ basename: 'main', suffix: '.min' }))
    .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.d_css));
});

gulp.task('default', ['pug', 'sass'], function () {
  console.log('watching for changes...');
  gulp.watch(paths.pug, ['pug']);
  gulp.watch(paths.sass, ['sass']);
});
