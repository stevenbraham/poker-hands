<template>
    <div id="owd-cards">
        <card-keyboard submit-text="Lock card #1" keyboard-id="own-card-1"></card-keyboard>
    </div>
</template>
<script type="text/babel">
    import CardKeyboardComponent from './CardKeyboard.vue'
    export default{
        components: {
            "card-keyboard": CardKeyboardComponent,
        }
    }
</script>
