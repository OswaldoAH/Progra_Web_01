// Importar las funciones específicas de la API de gulp que vamos a utilizar
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// Importar los paquetes con los que vamos a trabajar
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const uglifyCss = require('gulp-uglifycss');
const imageMin = require('gulp-imagemin');

// Constantes de trabajo
const files = {
    scssPath: 'src/scss/**/*.scss',
    htmlPath: 'dist/**/*.html',
    jsPath: 'src/js/**/*.js',
    cssPath: 'dist/css/*.css',
    imagePath: 'src/imgs/*.jpg'
}


/**
 * Compilar los archivos de sass en estilos en cascada para el navegador (CSS)
 */
function scssTask() {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'));
}

function jsTask() {
    return src(files.jsPath)
        .pipe(uglify())
        .pipe(dest('dist/js/'));
}

function minifyCssTask() {
    return src(files.cssPath)
        .pipe(uglifyCss({
            "uglyComments": true
        }))
        .pipe(dest('dist/css/build/'));
}

/**
 * Observar cambios en los archivos de sass para compilarlos automaticamente
 */
function watchTask() {
    watch(
        [files.scssPath, files.htmlPath, files.jsPath],
        series(scssTask, minifyCssTask, jsTask, imageTask, reloadTask)
    )
}

function imageTask() {
    return src(files.imagePath)
        .pipe(imageMin())
        .pipe(dest('dist/imgs/'))
}


function serveTask(d) {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}


function reloadTask(d) {
    browserSync.reload();
    d();
}

exports.default = series(scssTask, minifyCssTask, imageTask, jsTask, serveTask, watchTask);