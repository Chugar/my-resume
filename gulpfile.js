const gulp = require('gulp')
const terser = require('gulp-terser')
const concat = require('gulp-concat')
const sourcemap = require('gulp-sourcemaps')
const sassCompiler = require('gulp-sass')
sassCompiler.compiler = require('node-sass')
const pug = require('gulp-pug');
const  watch = require('gulp-watch');

function concatJS() {
    return gulp.src('src/scripts/*.js')
    .pipe(sourcemap.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/assets/js'))
}


function compileSASS() {
    return gulp.src('src/styles/*.sass')
    .pipe(sourcemap.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(sourcemap.write())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/assets/css/'))
}

function convertPug() {
    return gulp.src('src/index.pug')
    .pipe(pug({doctype: 'html', pretty: true}))
    .pipe(gulp.dest('./'))
}

function watchTask() {
    gulp.watch(
        ['src/scripts/*.js', 'src/styles/*.sass', 'src/templates/*.pug', 'src/index.pug'], 
        {interval: 1000},
        gulp.parallel(concatJS, compileSASS, convertPug)
    )
}


exports.default = gulp.series(
    gulp.parallel(concatJS, compileSASS, convertPug), 
    watchTask
);
