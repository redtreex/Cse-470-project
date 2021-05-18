const {calculatePrice} = require("../model/Order")

test('Order Price Calculate', () => {
    expect(calculatePrice(0)).toBe(10000);
})
