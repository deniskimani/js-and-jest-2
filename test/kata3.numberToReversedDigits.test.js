const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
    test("returns a reversed array of the number's digits", () => {

        expect(numberToReversedDigits(388899)).toStrictEqual([9, 9, 8, 8, 8, 3])

    });
});