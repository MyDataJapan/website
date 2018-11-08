var gulp = require('gulp');
var ejs = require('gulp-ejs');
var fs = require("fs");
var rename = require('gulp-rename');

gulp.task('ejs', () => {
    gulp.src(['./_page/**/*.ejs'])
        .pipe(ejs())
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./public/'));
});
