import Vue from "vue";
import VueStash from "vue-stash";
import CardsList from "./components/CardsList.vue";
import AddCard from "./components/AddCard.vue";

Vue.use(VueStash);

new Vue({
    el: '#app',
    data: {
        store: {
            cards: [],
            myCards: []
        }
    },
    components: {CardsList, AddCard}
});