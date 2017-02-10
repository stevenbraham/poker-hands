<template>
    <div id="cards-list">
        <img class="card" v-on:click="removeCard" v-for="(card,index) in cards" v-bind:data-index="index" v-bind:src="'images/cards/'+card+'.svg'"/>
    </div>


</template>
<script>
    export default{
        store: ['cards'],
        methods:{
             removeCard:function(e){
                if(confirm('Are you sure?')){
                    this.cards.splice($(e.srcElement).data('index'),1);
                }
            }
        }
    }
</script>
