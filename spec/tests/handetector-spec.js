/**
 * Created by stevenbraham on 11-02-17.
 */
import HandsDetector from "../../source/js/lib/HandsDetector";

describe("Handsdetector suite", function () {
    it("Tests the one pair function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isOnePair()).toBe(true);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isOnePair()).toBe(false);
        expect(new HandsDetector(['QH', '7C', '5H', 'QC']).isOnePair()).toBe(true);
    });

    it("Tests the two pair function", function () {
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isTwoPair()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isTwoPair()).toBe(false);
        expect(new HandsDetector(['7C', '7S', '2H', '2C', 'QS']).isTwoPair()).toBe(true);
        expect(new HandsDetector(['QH', '7C', '5H', 'QC']).isTwoPair()).toBe(false);
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
        expect(new HandsDetector(['5C', '5H', 'KH', 'QC']).isARoyalHouse()).toBe(false);
        expect(new HandsDetector(['7C', '5H', '2H', 'QC']).isARoyalHouse()).toBe(false);
        expect(new HandsDetector(['AC', '7S', '7H', '7D', 'QS']).isARoyalHouse()).toBe(false);
        expect(new HandsDetector(['7C', '7S', '7H', 'QD', 'QS']).isARoyalHouse()).toBe(true);
    });
});