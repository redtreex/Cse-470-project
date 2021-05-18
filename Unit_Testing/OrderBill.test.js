const {makePayment} = require("../model/OrderBill");

test('OrderBill', () => {
    expected(makePayment("ord789")).toBe(1)
})
