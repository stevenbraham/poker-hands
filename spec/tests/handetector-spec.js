/**
 * Created by stevenbraham on 11-02-17.
 */

import HandsDetector from '../../source/js/lib/HandsDetector';

describe("Handsdetector suite", function () {
    it("contains spec with an expectation", function () {
        expect(new HandsDetector().sayHi()).toBe(34);
    });
});