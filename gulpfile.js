var gulp = require('gulp');
var concat = require('concat');
var browserify = require('browserify');


gulp.task('browserify', function () {
    gulp.src(['app/js/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('curious-hagoth.js'))
        .pipe(gulp.dest('./out'));
});

gulp.task('build', function () {
    //var b = browserify('./src/app.js');
    browserify('./src/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./out/'));

    //exclude('angular')
    //    .bundle()
    //    .pipe(rename('curious-hagoth.js'))
    //    .pipe(gulp.dest('./out'));
});
