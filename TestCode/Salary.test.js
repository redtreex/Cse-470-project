const {giveSalary} = require("../model/Salary")

test('giveSalary', () => {
    expected(giveSalary("E2104003")).toBe(200);
})
