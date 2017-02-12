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
        this.cardsByValue = {};
        this.cardsBySuit = {};
        //split suit and value
        for (var i = 0, len = cards.length; i < len; i++) {
            let splitted = cards[i].split("");
            //splitted[1] = the suit
            if (this.cardsByValue[splitted[0]]) {
                this.cardsByValue[splitted[0]].push(splitted[1]);
            } else {
                this.cardsByValue[splitted[0]] = [splitted[1]];
            }

            if (this.cardsBySuit[splitted[1]]) {
                this.cardsBySuit[splitted[1]].push(splitted[0]);
            } else {
                this.cardsBySuit[splitted[1]] = [splitted[0]];
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

    isAFullHouse() {
        return (this.hasPairs(3, 1, false) && this.hasPairs(2, 1, false) && this.cardsCount >= 5);
    }

    isFlush() {
        for (let suit in this.cardsBySuit) {
            if (this.cardsBySuit.hasOwnProperty(suit)) {
                if (this.cardsBySuit[suit].length == this.cardsCount) {
                    return true;
                }
            }
        }
        return false;
    }

    isStraight() {
        if (this.cardsCount > 1) {

        }
        return false;
    }

    /**
     * Check if a pair of values in present
     * @param {Number} cardsInPair how many cards are a pair
     * @param {Number} pairsNeeded how many pairs should be found
     * @param {bool} Should the comparison be == or >=
     * @return {bool}
     */
    hasPairs(cardsInPair, pairsNeeded, allowGreaterThan = true) {
        if (this.cardsCount < cardsInPair) {
            return false;
        }
        let pairsFound = 0;
        for (let cardValue in this.cardsByValue) {
            if (this.cardsByValue.hasOwnProperty(cardValue)) {
                let passedCheck = allowGreaterThan ? (this.cardsByValue[cardValue].length >= cardsInPair) : this.cardsByValue[cardValue].length == cardsInPair;
                if (passedCheck) {
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