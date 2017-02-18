<template>
    <div class="card-keyboard">
        <div class="btn-group suits-input" id="suits-input" data-toggle="buttons">
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
        <div class="btn-group value-input" id="value-input" data-toggle="buttons">
            <label class="btn btn-warning" v-for="value in valueList">
                <input checked type="radio" name="value" v-bind:value="value"/>{{value}}
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-block btn-success" v-on:click="submit">{{submitText}}</button>
        </div>
    </div>
</template>
<script>
    export default{
       props: ['submitText'],
       methods:{
        submit:function(){
          this.$emit('submit',{test:"34"})
        }
       },
       data(){
            return{
             valueList:['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
            }
        }
    }


</script>
