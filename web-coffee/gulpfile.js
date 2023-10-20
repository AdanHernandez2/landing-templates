const { src, dest, watch, series, parallel } = require('gulp'); // significa que esporta mas de una funcion
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
    //compilar sass
    // pasos: 1- Identificar archivo. 2- compilarla. 3-Guardar el .css

    src('src/scss/app.scss')
        .pipe( sass() ) //compila
        .pipe(postcss([autoprefixer()]))
        .pipe( dest('build/css') ) //almacena hoja de estilos compilada
    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);