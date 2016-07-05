'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js']);

//html
gulp.task('html', function(){
  gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
});

//js
gulp.task('js', function(){
  gulp.src('./main.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function(){
  gulp.watch('./index.html', ['html'])
  gulp.watch('./main.js', ['js'])
  gulp.watch('./controllers/game.js', ['js'])
});
