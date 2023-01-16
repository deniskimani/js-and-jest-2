const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
    test("returns the employee's role in the company", () => {
        const jim = {
            name: 'Jim',
            role: 'Accountant'
        };

        const dilys = {
            name: 'Dilys',
            role: "IT Specialist"
        };

        const marjorie = {
            name: 'Marjorie',
            role: 'Manager'
        };

        expect(getEmployerRole('Jim', [jim, dilys, marjorie])).toBe("Accountant");




    });
});