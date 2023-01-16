const { joinNames } = require("../src");

describe("joinNames", () => {
    test("returns string of names, seperated by commas and an ampersand", () => {
        const people = [{
                name: 'Jim',
                role: 'Accountant'
            },

            {
                name: 'Dilys',
                role: "IT Specialist"
            },

            {
                name: 'Marjorie',
                role: 'Manager'
            },
            {
                name: 'Mark',
                role: 'Assistant Manager'
            }
        ]
        expect(joinNames(people)).toBe("Jim, Dilys, Marjorie & Mark")
    });
});