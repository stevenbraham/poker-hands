<template>
    <div id="add-card">
        <card-keyboard v-on:submit="addCard" keyboard-id="add-kard-keyboard" submit-text="Add card"></card-keyboard>
    </div>


</template>
<script type="text/babel">
    import CardKeyboardComponent from './CardKeyboard.vue'
    export default{
        store: ['cards'],
        components: {
            "card-keyboard": CardKeyboardComponent,
        },
        methods: {
            addCard: function (e) {
                this.cards.unshift(e.pair);
            }
        }
    }
</script>
