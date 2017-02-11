/**
 * Created by stevenbraham on 11-02-17.
 */

/**
 * This class contains functions to detect poker hands
 */
class HandsDetector {

    /**
     * Cards should be given in the cardsJS format
     * eg. Heart ace => AH, 8 club => 8C
     * @param cards
     */
    constructor(cards) {
        this.cardsCount = cards.length;
        this.cards = {};
        //split suit and value
        for (var i = 0, len = cards.length; i < len; i++) {
            let splitted = cards[i].split("");
            //splitted[1] = the suit
            if (this.cards[splitted[0]]) {
                this.cards[splitted[0]].push(splitted[1]);
            } else {
                this.cards[splitted[0]] = [splitted[1]];
            }
        }
    }

    isOnePair() {
        return this.hasPairs(2, 1);
    }

    isTwoPair() {
        return this.hasPairs(2, 2);
    }

    isThreeOfAKind() {
        return this.hasPairs(3, 1);
    }

    isFourOfAKind() {
        return this.hasPairs(4, 1);
    }

    isARoyalHouse() {
        return (this.isThreeOfAKind() && this.isOnePair() && this.cardsCount >= 5);
    }

    /**
     * Check if a pair of values in present
     * @param {Number} cardsInPair how many cards are a pair
     * @param {Number} pairsNeeded how many pairs should be found
     * @return {bool}
     */
    hasPairs(cardsInPair, pairsNeeded) {
        if (this.cardsCount < cardsInPair) {
            return false;
        }
        let pairsFound = 0;
        for (let cardValue in this.cards) {
            if (this.cards.hasOwnProperty(cardValue)) {
                if (this.cards[cardValue].length >= cardsInPair) {
                    pairsFound++;
                    if (pairsFound >= pairsNeeded) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

module.exports = HandsDetector;