var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
    gulp.src('css/*.css')
        .pipe(concatCss('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));
});