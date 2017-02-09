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
    mix.sass('style.scss');
    mix.webpack('app.js');
});