<template>
    <div id="add-card">
        <div class="btn-group" id="suits-input" data-toggle="buttons">
            <label class="btn btn-primary">
                <input checked type="radio" name="suit" value="S"/>♠️️
            </label>
            <label class="btn btn-primary">
                <input type="radio" name="suit" value="C"/>♣️️️️
            </label>
            <label class="btn btn-primary">
                <input type="radio" name="suit" value="H"/>♥️️
            </label>
            <label class="btn btn-primary">
                <input type="radio" name="suit" value="D"/>♦️️
            </label>
        </div>
        <div class="btn-group" id="value-input" data-toggle="buttons">
            <label class="btn btn-warning" v-for="value in valueList">
                <input checked type="radio" name="value" v-bind:value="value"/>{{value}}
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-block btn-success" v-on:click="addCard">Add card</button>
        </div>
    </div>


</template>
<script>
    export default{
        store: ['cards'],
         data(){
            return{
             valueList:['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
            }
        },
        methods:{
        addCard:function(){
        var suit = $('input[name="suit"]:checked').val();
        var value = $('input[name="value"]:checked').val();
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
