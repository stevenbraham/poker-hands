/**
 * Created by stevenbraham on 01-02-17.
 */
require('es6-promise').polyfill();
var gulp = require('gulp');
var connect = require('gulp-connect');
var fs = require('fs');
var mainBowerFiles = require('main-bower-files');
var plugins = require('gulp-load-plugins')({
    scope: ['devDependencies'],
    pattern: ['*']
});


gulp.task('sass', function () {
    return gulp.src('source/scss/*.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cssbeautify())
        .pipe(gulp.dest('build/css'));
});

//copy files

gulp.task('copy', function () {
    gulp.src('source/js/**/*.js').pipe(gulp.dest('build/js'));
    gulp.src('source/images/**/*').pipe(gulp.dest('build/images'));
    gulp.src('source/**/*.html').pipe(gulp.dest('build'));
});

//file watcher
gulp.task('watch', function () {
    gulp.watch(['source/**/*'], ['build']);
});

//clean build dir
gulp.task('clean', function () {
    return plugins.del.sync('build');
})

//webserver
gulp.task('server', function () {
    connect.server({root: "build"});
});

gulp.task('build', function (callback) {
    plugins.runSequence(['clean', 'sass', 'copy'],
        callback
    )
});


gulp.task('default', function (callback) {
    plugins.runSequence(['build', 'server', 'watch'], callback);
});

/* dist tasks */
gulp.task('clean-dist', function () {
    return plugins.del.sync('dist');
})
gulp.task('copy-dist', function () {
    gulp.src('build/images/**/*').pipe(gulp.dest('dist/images'));
    gulp.src('build/js/**/*').pipe(gulp.dest('dist/js'));
    gulp.src('node_modules/freelancer/**/*').pipe(gulp.dest('dist/vendor/freelancer'));
    gulp.src('build/**/*.html').pipe(plugins.htmlmin({collapseWhitespace: true})).pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    gulp.src('build/css/**/*.css')
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })).pipe(plugins.cleanCss({compatibility: 'ie8'})).pipe(gulp.dest('dist/css'));
});

gulp.task('js-dist', function () {
    gulp.src('build/js/**/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('dist', function () {
    plugins.runSequence(['clean-dist', 'copy-dist', 'js-dist', 'css']);
});