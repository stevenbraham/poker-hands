<template>
    <div id="owd-cards">
        <card-keyboard submit-text="Lock card #1"></card-keyboard>
    </div>
</template>
<script>
    import CardKeyboardComponent from './CardKeyboard.vue'

    export default{
    components:{
          "card-keyboard":  CardKeyboardComponent,
        }
}

</script>
