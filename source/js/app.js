window.$ = window.jQuery = require('jquery');
require ('bootstrap');
import Vue from "vue";
import VueStash from "vue-stash";
import CardsList from "./components/CardsList.vue";
import OwnCards from "./components/OwnCards.vue";
import AddCard from "./components/AddCard.vue";
import HandsDetector from "./components/HandsDetector.vue";

Vue.use(VueStash);

new Vue({
    el: '#app',
    data: {
        store: {
            cards: [],
            myCards: []
        }
    },
    components: {CardsList, AddCard, OwnCards, HandsDetector}
});