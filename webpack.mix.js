const mix = require("laravel-mix");
require("laravel-mix-polyfill");
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
mix.webpackConfig({ node: { fs: "empty" } });

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: "> 0.25%, not dead",
        corejs: 3
    });
