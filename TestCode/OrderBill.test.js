const {makePayment} = require("../model/OrderBill");

test('OrderBill', () => {
    expect(makePayment("ord789")).toBe(1)
})
