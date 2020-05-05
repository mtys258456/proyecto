const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resourse/plantilla/css/font-awesome.min.css',
    'resourse/plantilla/css/simple-line-icons.min.css',
    'resourse/plantilla/css/style.css'
], 'public/css/plantilla.css')
.scripts([
    'resourse/plantilla/js/bootstrap.min.js',
    'resourse/plantilla/js/Chart.min.js',
    'resourse/plantilla/js/jquery.min.js',
    'resourse/plantilla/js/pace.min.js',
    'resourse/plantilla/js/popper.min.js',
    'resourse/plantilla/js/template.js'
], 'public/js/plantilla.js');
