var gulp = require('gulp');
var ejs = require('gulp-ejs');
var fs = require("fs");
var rename = require('gulp-rename');

gulp.task('ejs', () => {
    var recentEvents = JSON.parse(fs.readFileSync('_page/data/recent_events.json', 'utf8'));
    var pastEvents = JSON.parse(fs.readFileSync('_page/data/past_events.json', 'utf8'));
    gulp.src(['./_page/**/*.ejs'])
        .pipe(ejs({
            recentEvents: recentEvents,
            pastEvents: pastEvents
        }))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./public/'));
});
