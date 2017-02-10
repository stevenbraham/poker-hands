/**
 * Created by stevenbraham on 09-02-17.
 */
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');
require('laravel-elixir-vueify');
require('vue-resource');

elixir.config.assetsPath = 'source';
elixir.config.publicPath = 'build';
elixir.config.viewPath = './';
elixir(function (mix) {
    mix.webpack('app.js');
    mix.copy('source/images', 'build/images');
    mix.copy('node_modules/cardsJS/dist/cards', 'build/images/cards');
    mix.copy('source/index.html', 'build/index.html');
    mix.sass('style.scss');
});