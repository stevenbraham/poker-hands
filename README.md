# About

([Working demo](https://stevenbraham.github.io/poker-hands-demo/))

This is a tool that I developed for myself to use during poker games. 

**The UI of this application is intended to be used on a smartphone**

#How to use

* In the first tab you see 2 keyboards with card symbols and values. Choose for each keyboard a symbol and a value. Then press lock on each keyboard. Your own 2 cards are now set. The lock buttons now display your own cards in case you forget them.
* In the second tab you also have a card input keyboard. While the dealer adds card to the table, you have to input them using this keyboard. You can click on a card to delete it. 
* After a while the button on the bottom of screen starts to flash green. It will tell you the highest combination it has detected. If you click it you can see other card combinations my application has detected.

If you want to play a new game, just refresh the page.

#Technical information

## Libraries
* This application has been developed with the [Vue.js](https://vuejs.org/) javascript framework.
* I use [Vue stash](https://github.com/cklmercer/vue-stash) to share data between my components
* The cards are from [CardsJs](https://github.com/richardschneider/cardsJS/)
* The theme used is [Flat UI](https://designmodo.github.io/Flat-UI/)
* For building I use the [Elixir gulp wrapper from Laravel](https://github.com/laravel/elixir)

## How to build locally

1. clone this repo
2. execute `npm install`

This will download all libraries and compiles a build for you. This of course assumes you have [Gulp](http://gulpjs.com/) installed.

## Testing

The heart of my application lays in the [HandsDetector.js](https://github.com/stevenbraham/poker-hands/blob/master/source/js/lib/HandsDetector.js) file. Rather than building one detect function, I have made a detect function for each hand. I have made a unit test for the detection functions. You can find it in the spec folder. 

To run the unit test, you need the [Jasmine](https://jasmine.github.io/) framework.

To test run `npm test`.
