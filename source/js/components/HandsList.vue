<template>
    <div>
        <ol>
            <li v-for="(result,hand) in testResults" v-bind:class="[result ? 'text-success' : 'text-danger']">{{hand}}</li>
        </ol>
    </div>
</template>
<script type="text/babel">
    import DetectorLib from "../lib/HandsDetector";
    import lodash from 'lodash';
    export default{
        store: ['myCards', 'cards'],
        data(){
            return {
                testResults: {}
            }
        },
        mounted(){
            this.calculateHand();
        },
        methods: {
            calculateHand: function () {
                let allCards = this.myCards.concat(this.cards);
                let detector = new DetectorLib(allCards);
                this.testResults = detector.combinedTest();
            }
        },
        watch: {
            myCards: function () {
                this.calculateHand();
            },
            cards: function () {
                this.calculateHand();
            }
        }
    }
</script>
