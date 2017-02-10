import Vue from 'vue';
import VueStash from 'vue-stash';
import CardsJs from 'cardsJS/dist/cards.min.js';
import CardsList from './components/CardsList.vue';

Vue.use(VueStash);

new Vue({
    el: '#app',
    data: {
        store: {
            cards: ['3C', 'KS'],
        }
    },
    components: {CardsList}
});