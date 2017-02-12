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
        this.possibleCards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        cards = cards.sort();
        this.cardsCount = cards.length;
        this.cardsByValue = {};
        this.cardsBySuit = {};
        //split suit and value
        for (var i = 0, len = cards.length; i < len; i++) {
            let cardValue, cardSuit = "";
            let splitted = cards[i].split("");
            if (cards[i].length == 3) {
                //10
                cardValue = "10";
                cardSuit = splitted[2];
            } else {
                cardValue = splitted[0];
                cardSuit = splitted[1];
            }
            //splitted[1] = the suit
            if (this.cardsByValue[cardValue]) {
                this.cardsByValue[cardValue].push(cardSuit);
            } else {
                this.cardsByValue[cardValue] = [cardSuit];
            }

            if (this.cardsBySuit[cardSuit]) {
                this.cardsBySuit[cardSuit].push(cardValue);
            } else {
                this.cardsBySuit[cardSuit] = [cardValue];
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
            let keysPassed = [];
            for (let cardValue in this.cardsByValue) {
                if (this.cardsByValue.hasOwnProperty(cardValue)) {
                    if (cardValue == "A") {
                        //10 is needed to make a high straight
                        keysPassed.push((this.cardsByValue.hasOwnProperty("10") ? 13 : 0));
                    } else {
                        keysPassed.push(this.possibleCards.indexOf(cardValue));
                    }
                }
            }
            keysPassed = keysPassed.sort(function (a, b) {
                return a - b
            });

            //loop over all keys passed to see if they are in sequence
            for (var i = 0, len = keysPassed.length; i < len; i++) {
                if (i != (keysPassed.length - 1)) {
                    let currentKey = keysPassed[i];
                    let nextKey = keysPassed[i + 1];
                    if ((currentKey != nextKey) && ((nextKey - currentKey) != 1)) {
                        return false;
                    }
                } else {
                    //last item reached without errors
                    return true;
                }
            }
        }
        return false;
    }

    isStraightFlush() {
        return (this.isFlush() && this.isStraight());
    }

    isRoyalFlush() {
        return (this.isStraightFlush() && this.cardsByValue.hasOwnProperty("10") && this.cardsByValue.hasOwnProperty("A"));
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