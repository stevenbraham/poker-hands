<template>
    <div id="cards-list">
        <img class="card" v-for="card in cards" v-bind:src="'images/cards/'+card+'.svg'"/>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cards:['3C','KS']
            }
        }
    }
</script>
