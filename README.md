# This application isn't finished yet

#About

([Working demo](https://sb7.nl/poker))

**Note: the UI of this application is intended to be used on a smartphone**

This is a tool that I developed for myself to use during poker games. In the first tab you choose your own cards. In the second tab, keep adding cards as they appear on the table. You can click on a card to delete it. 

The application will let you know which poker hand you currently have. This is useful if you don't know the rules very well like me.

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