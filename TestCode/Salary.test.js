const {giveSalary} = require("../model/Salary")

test('giveSalary', () => {
    expect(giveSalary("E2104003")).toBe(200);
})
