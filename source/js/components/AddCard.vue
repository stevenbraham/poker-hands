<template>
    <div id="add-card">
        <card-keyboard v-on:submit="addCard" submit-text="Add card"></card-keyboard>
    </div>


</template>
<script>
    import CardKeyboardComponent from './CardKeyboard.vue'

    export default{
        store: ['cards'],
        components:{
          "card-keyboard":  CardKeyboardComponent,
        },
        methods:{
        addCard:function(e){
        console.log(e.test);
        var suit = $('#add-card input[name="suit"]:checked').val();
        var value = $('#add-card input[name="value"]:checked').val();
        if(value && suit){
            //reset
            $("#add-card .btn").removeClass('active');
            var combined = value+suit;
            this.cards.unshift(combined);
        }

        }
        }

    }




</script>
