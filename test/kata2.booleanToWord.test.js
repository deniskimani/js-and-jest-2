const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
    // how do we create specs again???
    test("returns a string of the boolean value", () => {

        expect(booleanToWord(true)).toBe('true');
        expect(booleanToWord(false)).toBe('false')
    });
});