const { reachDestination } = require("../src");

describe("reachDestination", () => {
    test("returns string with estimated time of arrival", () => {
        expect(reachDestination(100, 10)).toBe("Estimated time of arrival is 10 hours")
    });
});