const { src, dest, watch, series, parallel } = require('gulp'); // significa que esporta mas de una funcion

// css sass
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//imagenes
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
    //compilar sass
    // pasos: 1- Identificar archivo. 2- compilarla. 3-Guardar el .css

    src('src/scss/app.scss')
        .pipe( sass() ) //compila
        .pipe(postcss([autoprefixer()]))
        .pipe( dest('build/css') ) //almacena hoja de estilos compilada
    done();
}

function imagenes(done) {
    //importacion dinamica de imagemin
    import('gulp-imagemin').then((imagemin) => {
      src('src/img/**/*')
        .pipe(imagemin.default({optimizationLevel: 3}))
        .pipe(dest('build/img'))
      done();
    });
}  

function versionWebp() {
    const opciones = {
        quality:50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe( webp(opciones))
            .pipe( dest('build/img'))
}

function versionAvif() {
    const opciones = {
        quality:50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe( avif(opciones))
            .pipe( dest('build/img'))
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);