/**
 Author: Martin Ojaste - 2015 - PunkDigital OÜ
 */

// Include Gulp
var gulp = require('gulp');

// Include Gulp Plugins
var less = require('gulp-less');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var del = require('del');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');


gulp.task('fonts', function () {
    gulp.src('src/vendor/bootstrap/fonts/**')
        .pipe(gulp.dest('dist/fonts'));

    return gulp.src(['src/project/assets/fonts/**', '!src/project/assets/fonts/*.less', '!src/project/assets/fonts/{iconfont,iconfont/**}'])
        .pipe(gulp.dest('dist/fonts'));

});

gulp.task('html', function () {

    return gulp.src('src/project/html/**').pipe(gulp.dest('dist/html'));

});


gulp.task('img', function () {
    return gulp.src('src/project/assets/img/**').pipe(gulp.dest('dist/img'));
});



/***
 *
 * Build less and minify
 *
 ***/

gulp.task('less', function () {
    return gulp.src('src/project/assets/less/init.less')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(less())
        .pipe(rename("style.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifycss())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(gulp.dest('dist/css'));
});


/***
 *
 * Js concentrate and minify
 *
 ***/
gulp.task('scripts', function () {
    return gulp.src([

        'bower_components/jquery/jquery.js',

        'src/vendor/bootstrap/js/transition.js',
        'src/vendor/bootstrap/js/alert.js',
        'src/vendor/bootstrap/js/button.js',
        'src/vendor/bootstrap/js/carousel.js',
        'src/vendor/bootstrap/js/collapse.js',
        'src/vendor/bootstrap/js/dropdown.js',
        'src/vendor/bootstrap/js/modal.js',
        'src/vendor/bootstrap/js/tooltip.js',
        'src/vendor/bootstrap/js/popover.js',
        'src/vendor/bootstrap/js/scrollspy.js',
        'src/vendor/bootstrap/js/tab.js',
        'src/vendor/bootstrap/js/affix.js',

        'bower_components/fullpage.js/dist/jquery.fullpage.js',
        'bower_components/jquery-slimscroll/jquery.slimscroll.js',

        'src/project/assets/js/svgsupport.js',
        'src/project/assets/js/jquery.form.js',
        'src/project/assets/js/jquery.validate.js',
        'bower_components/wow/dist/wow.js',
        'src/project/assets/js/scripts.js',

    ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//scripts that dont need concat
gulp.task('scripts2', function () {
    return gulp.src('src/project/assets/js/extra/**')
        .pipe(gulp.dest('dist/js/extra'))

});


/***
 *
 *  Watch for file changes
 *
 ***/

gulp.task('watch', function () {
    gulp.watch('src/project/assets/img/**', ['img']);
    gulp.watch('src/project/assets/js/*.js', ['scripts']);
    gulp.watch('src/project/assets/less/*.less', ['less']);
    gulp.watch('src/vendor/bootstrap/less/**', ['less']);
    gulp.watch('src/project/html/**', ['html']);
    gulp.watch('src/project/assets/fonts/iconfont/**', ['iconfont', 'fonts', 'less']);
});

/***
 *
 *  Delete dist content
 *
 ***/

gulp.task('del', function (cb) {
    del(['dist/*'], cb);
});


/***
 *
 *  Livereload
 *
 ***/

gulp.task('livereload', function () {
    // Create LiveReload server
    livereload.listen();
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**'])
        .on('change', livereload.changed)
        .on('error', gutil.log);

});


/***
 *
 *  Generate iconfonts from svg
 *
 ***/
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = "iconfont";
gulp.task('iconfont', function () {
    gulp.src(['src/project/assets/iconfont/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'src/project/assets/iconfont/_template.less',
            targetPath: '../../src/project/assets/less/iconfont_autobuild.less',
            fontPath: '../fonts/'

        }))
        .pipe(iconfont({
            fontName: fontName,
            normalize:true,
            formats: ['ttf', 'eot', 'woff','woff2','svg'],
            fontHeight: 1001

        }))
        .pipe(gulp.dest('dist/fonts'));
});


/***
 *
 *  Define default task and sequence
 *
 ***/
gulp.task('build', ['img', 'iconfont', 'less', 'fonts', 'scripts', 'scripts2', 'html']);

gulp.task('default', function (callback) {
    runSequence('del',
        'build',
        'watch',
        'livereload',
        callback);
});
