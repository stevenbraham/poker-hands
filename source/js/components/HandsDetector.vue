<template>
    <div class="col-md-12">
        <a href="#my-hand" v-bind:class="'btn btn-block '+[hasMatch ? 'btn-success':'btn-danger']">
            {{hasMatch ? hand : 'No hands detected'}}
        </a>
    </div>
</template>
<script type="text/babel">
    import DetectorLib from "../lib/HandsDetector";
    import lodash from 'lodash';
    export default{
        store: ['myCards', 'cards'],
        data(){
            return {
                hasMatch: false,
                hand: ""
            }
        },
        methods: {
            calculateHand: function () {
                let allCards = this.myCards.concat(this.cards);
                let detector = new DetectorLib(allCards);
                let testResults = detector.combinedTest();
                for (let handName in testResults) {
                    if (testResults.hasOwnProperty(handName)) {
                        if (testResults[handName]) {
                            this.hasMatch = true;
                            this.hand = lodash.startCase(handName);
                            return;
                        }
                    }
                }
                this.hasMatch = false;
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
