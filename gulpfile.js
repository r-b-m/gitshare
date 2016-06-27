/**
 Author: Roland Mandzolo 2016
 */


var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var minifyhtml = require('gulp-minify-html');
var notify = require("gulp-notify");
var util = require('gulp-util');
var concat = require('gulp-concat');
var del = require('del');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var options = require('minimist')(process.argv.slice(2));


//minimist
gulp.task('test', function () {

    return util.log(util.colors.yellow(':) prod mode :' +options.dev));


});

//browser-sync
gulp.task('browser-sync', function () {

    browserSync({
        server: {
            baseDir: "./dist/"
        }

    });

});

// source and distribution folder
var project = './src/project/';
var sassDir =  project+ 'sass/';


//STYLES
gulp.task('styles', function () {

    return gulp.src(sassDir+'main.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass(
            {
                outputStyle: (options.prod ? 'compressed' : 'nested')
            }
        ).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(options.prod ? minifycss(): util.noop())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .on('end', function(){
            util.log(util.colors.yellow(':) GOOD'));
        });



});

//ICONFONT
var fontName = "icon-font";
gulp.task('iconfont', function () {

    return gulp.src(project+'/svg/*.svg')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(iconfontCss({
            fontName: fontName,
            path: project+'/svg/_template.scss',
            targetPath: '../../src/project/sass/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            appendcodepoints: true,
            normalize:true,
            formats: ['ttf', 'eot', 'woff','woff2','svg'],
            fontHeight: 1001

    }))
        .on('codepoints', function(codepoints, options){
            //css templeting
            console.log(codepoints,options);
        })
        .pipe(gulp.dest('./dist/fonts'));

});



//HTML
gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src(project+'/html/**')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    /*.pipe(options.prod ? minifyhtml(opts): util.noop())*/
    .pipe(gulp.dest('./dist/'))
    .on('end', function(){
        util.log(util.colors.yellow(':) GOOD'));
    });

});

// BOOTSTRAP FONTS
/*gulp.task('fonts', function () {

    return gulp.src(project+'/bower_components/bootstrap-sass/assets/fonts/bootstrap/!**.*')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest('./dist/fonts'))
        .on('end', function(){
            util.log(util.colors.yellow(':) GOOD'));
        });

});*/
//MAIN FONT
/*gulp.task('mainfont', function () {

    return gulp.src(project+'/bower_components/aileron-webfont/fonts/!**.*')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest('./dist/fonts'))
        .on('end', function(){
            util.log(util.colors.yellow(':) GOOD'));
        });

});*/

//IMAGES
gulp.task('img',['del:img'], function () {
    return gulp.src(project+'/img/**/*.*')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
    .on('end', function(){
        util.log(util.colors.yellow(':) GOOD'));
    });
});

//DELETE
gulp.task('del:img', function(){
    return del(['./dist/img/**/*']);
});

//WATCH
gulp.task('watch', function () {
    gulp.watch([sassDir+'/*.scss', sassDir+'/*.sass'], ['styles']);
    gulp.watch(project+'./js/**/*.js', ['scripts']);
    gulp.watch(project+'./html/**/*.html', ['html']);
    gulp.watch(project+'./img/**/*.*', ['img']);


});

//SCRIPTS
gulp.task('scripts', function () {

    return gulp.src([
        project+'/bower_components/jquery/dist/jquery.js',
        project+'/bower_components/jquery.easing/js/jquery.easing.js',
        project+'/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        project+'/bower_components/ui-to-top/js/jquery.ui.totop.js',
        project+'/bower_components/jquery/jquery.mobile.custom.js',
        project+'/bower_components/jquery/main-script.js'








    ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/'))
        .on('end', function(){
            util.log(util.colors.yellow(':) GOOD'));
        });


});
//Default Task
gulp.task('default', ['html', 'scripts', 'styles', /*'fonts',*/ /*'mainfont',*/ 'iconfont', 'img', 'browser-sync', 'watch' ]);