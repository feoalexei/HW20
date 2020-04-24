/* eslint-disable */
const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-remove-files');
const babel = require('gulp-babel');
const connect = require('gulp-connect');

gulp.task('connect_server', () => {
    connect.server({
        root:'src',
        livereload: true
    });
});

gulp.task('clear_folder', done => {
    gulp.src('./dist/*')
        .pipe(clean());
    done();
});

gulp.task('copy_HTML', (done) => {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
    done();
});

gulp.task('build_CSS', (done) => {
    gulp.src('./src/main.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compact'
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
    done();
});

gulp.task('compile_JS', (done) => {
    gulp.src('./src/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist'))
    done();
});

gulp.task('watch', () => {
    gulp.watch('./src/index.html', gulp.series('copy_HTML'));
    gulp.watch('./src/main.scss', gulp.series('build_CSS'));
    gulp.watch('./src/index.js', gulp.series('compile_JS'));
});

gulp.task('default', gulp.parallel('connect_server', 'clear_folder', 'copy_HTML', 'build_CSS', 'compile_JS', 'watch'));