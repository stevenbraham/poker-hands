/**
 * Created by stevenbraham on 11-02-17.
 */
import HandsDetector from "../../source/js/lib/HandsDetector";

describe("Handsdetector suite", function () {
    it("Tests the one pair function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isOnePair()).toBe(true);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isOnePair()).toBe(false);
        expect(new HandsDetector(['QH', '7C', '5H', 'QC']).isOnePair()).toBe(true);
        expect(new HandsDetector(['QH', 'QS', '5H', 'QC']).isOnePair()).toBe(true);
    });

    it("Tests the two pair function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isTwoPair()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isTwoPair()).toBe(false);
        expect(new HandsDetector(['10C', '10S', '2H', '2C', 'QS']).isTwoPair()).toBe(true);
        expect(new HandsDetector(['QH', '10C', '1H', 'QC']).isTwoPair()).toBe(false);
    });

    it("Tests the 3 of a kind function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isThreeOfAKind()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isThreeOfAKind()).toBe(false);
        expect(new HandsDetector(['7C', '7H', '7S', 'QC']).isThreeOfAKind()).toBe(true);
        expect(new HandsDetector(['7C', '7S', '2H', '2C', 'QS']).isThreeOfAKind()).toBe(false);
        expect(new HandsDetector(['QH', '7C', '5H', 'QC']).isThreeOfAKind()).toBe(false);
    });

    it("Tests the 4 of a kind function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isFourOfAKind()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isFourOfAKind()).toBe(false);
        expect(new HandsDetector(['7C', '7H', '7S', 'QC']).isFourOfAKind()).toBe(false);
        expect(new HandsDetector(['7C', '7S', '7H', '7D', 'QS']).isFourOfAKind()).toBe(true);
        expect(new HandsDetector(['QH', '7C', '5H', 'QC']).isFourOfAKind()).toBe(false);
    });

    it("Tests the full house function function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isAFullHouse()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isAFullHouse()).toBe(false);
        expect(new HandsDetector(['AC', '7S', '7H', '7D', 'QS']).isAFullHouse()).toBe(false);
        expect(new HandsDetector(['7C', '7S', '7H', 'KD', 'QD']).isAFullHouse()).toBe(false);
        expect(new HandsDetector(['7C', '7S', '7H', 'QD', 'QS']).isAFullHouse()).toBe(true);
        expect(new HandsDetector(['AC', 'AH', 'AD', 'KH', 'KS']).isAFullHouse()).toBe(true);
    });

    it("Tests the flush function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5H', '2H', '3H']).isFlush()).toBe(true);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isFlush()).toBe(false);
        expect(new HandsDetector(['AC', '7S', '7H', '7D', 'QS']).isFlush()).toBe(false);
    });

    it("Tests the straight function", function () {
        expect(new HandsDetector(['AC', 'KC', 'QK', 'JS', '10H']).isStraight()).toBe(true);
        expect(new HandsDetector(['4H', '5S', '2H', '3C']).isStraight()).toBe(true);
        expect(new HandsDetector(['AC', '1C', '2C', '3C']).isStraight()).toBe(true);
        expect(new HandsDetector(['4H', '5S', '2H', '2H', '3C']).isStraight()).toBe(true);
        expect(new HandsDetector(['4H', '6S', '2H', '2H', '3C']).isStraight()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isStraight()).toBe(false);
        expect(new HandsDetector(['AC', '7S', '7H', '7D', 'QS']).isStraight()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '8S']).isStraight()).toBe(true);
        expect(new HandsDetector(['AC', '2C', '3C', '4C', '6C']).isStraight()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '9S']).isStraight()).toBe(false);
    });

    it("Tests the straight flush function", function () {
        expect(new HandsDetector(['AC', 'KC', 'QK', 'JS', '10H']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5S', '2H', '2H', '3C']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5H', '6H', '7H', '8H']).isStraightFlush()).toBe(true);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '8S']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '9S']).isStraightFlush()).toBe(false);
    });

    it("Tests the straight flush function", function () {
        expect(new HandsDetector(['AC', 'KC', 'QK', 'JS', '10H']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5S', '2H', '2H', '3C']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5H', '6H', '7H', '8H']).isStraightFlush()).toBe(true);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '8S']).isStraightFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '9S']).isStraightFlush()).toBe(false);
    });

    it("Tests the royal flush function", function () {
        expect(new HandsDetector(['AC', 'KC', 'QC', 'JC', '10C']).isRoyalFlush()).toBe(true);
        expect(new HandsDetector(['AC', 'KC', 'QC', 'JC', '10H']).isRoyalFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5S', '2H', '2H', '3C']).isRoyalFlush()).toBe(false);
        expect(new HandsDetector(['4H', '5H', '6H', '7H', '8H']).isRoyalFlush()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isRoyalFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '8S']).isRoyalFlush()).toBe(false);
        expect(new HandsDetector(['7S', '7S', '7H', '7D', '9S']).isRoyalFlush()).toBe(false);
    });
});