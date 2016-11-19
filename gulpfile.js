'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat'); // currently not used
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cache = require('gulp-cached');
const browserSync = require('browser-sync').create();

const paths = {
  js: './src/**/*.js',
  sass: './src/**/*.sass',
  pug: './src/**/*.pug',

  dist: './dist',
};

gulp.task('pug', function () {
  return gulp.src(paths.pug)
    .pipe(plumber())
    .pipe(cache('pug-templates'))
    .pipe(pug())
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(cache('sass-compile'))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp.src(paths.js)
    .pipe(plumber())
    .pipe(cache('scripts-compile'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    //.pipe(concat('main.js')) causes problems
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['pug', 'sass', 'scripts'], function () {
  browserSync.init({
    server: './dist',
    open: false
  });

  gulp.watch(paths.pug, ['pug']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', ['serve'], function () {
  console.log('serving...');
});
