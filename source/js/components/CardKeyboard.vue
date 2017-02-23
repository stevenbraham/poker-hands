<template>
    <div class="card-keyboard" v-bind:id="keyboardId">
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
<script type="text/babel">
    export default{
        props: ['submitText', 'keyboardId'],
        methods: {
            submit: function () {
                var suit = $('#' + this.keyboardId + ' input[name="suit"]:checked').val();
                var value = $('#' + this.keyboardId + ' input[name="value"]:checked').val();
                if (value && suit) {
                    //reset
                    $("#" + this.keyboardId + " .btn").removeClass('active');
                    var combined = value + suit;
                    this.$emit('submit', {pair: combined})
                }
            }
        },
        data(){
            return {
                valueList: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
            }
        }
    }
</script>
