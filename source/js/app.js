import Vue from 'vue';
import VueStash from 'vue-stash';
import CardsJs from 'cardsJS/dist/cards.min.js';
import CardsList from './components/CardsList.vue';
import AddCard from './components/AddCard.vue';
import HandsDetector from './lib/HandsDetector.js';

console.log(HandsDetector);

let x = new HandsDetector();

x.sayHi();

Vue.use(VueStash);

new Vue({
    el: '#app',
    data: {
        store: {
            cards: ['3C', 'KS'],
            myCards: []
        }
    },
    components: {CardsList, AddCard}
});