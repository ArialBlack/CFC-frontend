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
    spritesmith = require('gulp.spritesmith'),
    mqpacker = require("css-mqpacker"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    dirs = {
        'source': {
            'vendorJs': './source/js/vendor/',
            'vendorCss': './source/css/vendor/',
            'js': [
                './source/js/vendor/jquery.onepage-scroll.js',
                './source/js/vendor/scrollIt.min.js',
                './source/js/vendor/bootstrap.js',
                './source/js/index.js',
                './source/js/map.js'
            ],
            'fonts': './source/fonts/**/*',
            'html': './source/views/*.html',
            'jade_watch': './source/views/**/*.*',
            'sass': ['./source/sass/**/*.scss', './source/sass/**/*.sass'],

            'sassFolder': './source/sass/',
            'img': './source/images/*/*.*',
            'icons': './source/images/icons/*.png',
            'cssTemplate': 'source/helpers/sprite.template.mustache'
        },
        'build': {
            'css': './build/css/',
            'js': './build/js/',
            'fonts': './build/fonts/',
            'build': './build',
            'img': './build/images/'
        },

        'repo': {
            'css': './repo/sites/all/themes/zen/cfc/css/',
            'js': './repo/sites/all/themes/zen/cfc/js/'
        }

    };

//fonts
gulp.task('fonts', function () {
    gulp.src(dirs.source.fonts)
        .pipe(gulp.dest(dirs.build.fonts));
});


gulp.task('connect', function () {
    connect.server({
        root: dirs.build.build,
        livereload: true,
        port: 8888
    });
});

//jade
gulp.task('templates', function () {

    gulp.src(dirs.source.html)
        .pipe(plumber())
        .pipe(gulp.dest(dirs.build.build))
        .pipe(connect.reload());
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
        .pipe(gulp.dest(dirs.build.css))
        .pipe(connect.reload());
});


//sass
gulp.task('cssToRepo', function () {

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
        .pipe(gulp.dest(dirs.repo.css))
});

gulp.task('jsToRepo', function () {
    return gulp.src(dirs.source.js)
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(concat("all.js"))
        .pipe(gulp.dest(dirs.repo.js))
        .pipe(connect.reload());

});

// sprite
gulp.task('sprite', function () {
    var spriteData = gulp.src(dirs.source.icons)
        .pipe(plumber())
        .pipe(spritesmith({
            imgName: 'icons.png',
            cssName: '_sprite.sass',
            imgPath: '../img/icons.png',
            cssFormat: 'sass',
            padding: 4,
            cssTemplate: dirs.source.cssTemplate
        }));
    spriteData.img
        .pipe(gulp.dest(dirs.build.img));
    spriteData.css
        .pipe(gulp.dest(dirs.source.sassFolder));
});

//js
gulp.task('js', function () {
    return gulp.src(dirs.source.js)
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(concat("all.js"))
        .pipe(gulp.dest(dirs.build.js))
        .pipe(connect.reload());
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
    gulp.watch(dirs.source.jade_watch, ['templates']);
    gulp.watch(dirs.source.sass, ['sass', 'cssToRepo']);
    gulp.watch(dirs.source.js, ['js', 'jsToRepo']);
    gulp.watch(dirs.source.img, ['images']);
    gulp.watch(dirs.source.icons, ['sprite']);
});


gulp.task('default', ['fonts', 'js', 'templates', 'sass', 'images', 'connect', 'watch', 'jsToRepo', 'cssToRepo']);
