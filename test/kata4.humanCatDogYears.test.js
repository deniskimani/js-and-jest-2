const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {

    test("returns human years", () => {
        const age = 10
        expect(humanCatDogYears(age)).toBe("If age in human years is " + age + " then in dog years age is " + 53 + " and in cat years age is " + 57 + ".");
    });

});