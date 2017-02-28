var gulp    = require('gulp');
var less    = require('gulp-less');
var minify  = require('gulp-clean-css');
var rename  = require('gulp-rename');





gulp.task('less', function () {
   return gulp.src('./src/less/**/*.less')
       .pipe(less())
       .pipe(minify())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./dist/css'));
});


gulp.task ('default', ['']);