<template>
    <div id="owd-cards">
        <card-keyboard submit-text="Lock card #1" keyboard-id="own-card-1" v-on:submit="submit"></card-keyboard>
        <card-keyboard submit-text="Lock card #2" keyboard-id="own-card-2" v-on:submit="submit"></card-keyboard>
    </div>
</template>
<script type="text/babel">
    import CardKeyboardComponent from './CardKeyboard.vue'
    export default{
        store: ['myCards'],
        components: {
            "card-keyboard": CardKeyboardComponent,
        },
        methods: {
            submit: function (e) {
                this.myCards.push(e.pair);
                $("#" + e.source + " .btn").attr("disabled", "disabled");
                $("#" + e.source + " button").text(e.pair);
            }
        }
    }
</script>
