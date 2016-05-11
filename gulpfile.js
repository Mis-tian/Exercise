var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var seajsCombo = require( 'gulp-seajs-combo' );
gulp.task('seajsCombo_uglify',function(){
    return gulp.src('20160510/src/js/main.js')
        .pipe(seajsCombo())
        .pipe(uglify())
        .pipe(gulp.dest('./20160510/build/js'));
});
gulp.task('uglify',function(){
    return gulp.src('dest/js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dest/js'));
});
gulp.task('default',[/*'uglify',*/'seajsCombo_uglify'])