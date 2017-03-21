'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    gulpif = require('gulp-if'),
    mqpacker = require("css-mqpacker"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    dirs = {
        'source': {
            'vendorJs': './source/js/vendor/',
            'vendorCss': './source/css/vendor/',
            'js': [
                './source/bower_components/jquery.onepage-scroll/lib/jquery.onepage-scroll.js',
                './source/bower_components/ScrollIt/scrollIt.min.js',
                './source/bower_components/bootstrap/dist/js/bootstrap.js',
                './source/bower_components/jquery.cookie/jquery.cookie.js',
                './source/bower_components/jquery-nicescroll/jquery.nicescroll.min.js',
                './source/js/map.js',
                './source/js/index.js'
            ],
            'fonts': './source/fonts/**/*',
            'html': './source/views/*.html',
            'sass': ['./source/sass/**/*.scss', './source/sass/**/*.sass'],
            'sassFolder': './source/sass/',
            'img': './source/images/*/*.*',
            'icons': './source/images/icons/*.png',
            'cssTemplate': 'source/helpers/sprite.template.mustache'
        },
        'build': {
            'css': './css/',
            'js': './js/',
            'fonts': './fonts/',
            //'build': './build',
            'img': './images/'
        }
    };

//fonts
gulp.task('fonts', function () {
    gulp.src(dirs.source.fonts)
        .pipe(gulp.dest(dirs.build.fonts));
});

//sass
gulp.task('sass', function () {

    var processors = [
        autoprefixer({browsers: ['last 2 version', 'IE 10', 'IE 11'], cascade: false}),
        mqpacker({
            sort: function (a, b) {
                a = a.replace(/\D/g, '');
                b = b.replace(/\D/g, '');
                return b - a;
            }
        })
    ];

    return gulp.src(dirs.source.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dirs.build.css));
});

//js
gulp.task('js', function () {
    return gulp.src(dirs.source.js)
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(concat("all.js"))
        .pipe(gulp.dest(dirs.build.js));
});

//img
gulp.task('images', function () {
    return gulp.src(dirs.source.img)
        .pipe(plumber())
        .pipe(gulpif(/[.](png|jpeg|jpg|svg)$/, imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(dirs.build.img));
});

gulp.task('watch', function () {
    gulp.watch(dirs.source.sass, ['sass']);
    gulp.watch(dirs.source.js, ['js']);
    gulp.watch(dirs.source.img, ['images']);
});

gulp.task('default', ['fonts', 'js', 'sass', 'images', 'watch']);
