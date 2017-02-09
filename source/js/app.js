import Vue from 'vue';
import CardsList from './components/CardsList.vue';

var template;
var cards = [
    {
        id: "KS"
    }
];
new Vue({
    el: '#app',
    components: {CardsList}
});
function loadCards() {
    $("#cards-list").html(template({cards: cards}));
}

$(function () {
    template = Handlebars.compile($("#cards-list").html());
    loadCards();
    $("#add-card").click(function () {
        var id = window.prompt("ID:");
        id = id.toUpperCase();
        cards.push({id: id});
        loadCards();
    })
    $("button.btn-lg").click();
})