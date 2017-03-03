var gulp    = require('gulp');
var less    = require('gulp-less');
var minify  = require('gulp-clean-css');
var rename  = require('gulp-rename');
var watch   = require('gulp-watch');
var rsync   = require('gulp-rsync');





gulp.task('less', function () {
   return gulp.src('./src/less/**/*.less')
       .pipe(less())
       .pipe(minify())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function () {
    gulp.watch('src/less/**/*.less', ['less']);
});


gulp.task ('default', ['watch']);


gulp.task ('deploy', function () {
    return gulp.src('dist/**')
        .pipe(rsync({
            hostname: 'andimeier.ch',
            username: 'andimeie',
            destination: 'public_html/test',
            compress: true,
            archive: true,
            progress: true,
            silent: true,
            root: 'dist'
        }));
});