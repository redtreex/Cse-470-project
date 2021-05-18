const Payment = require("./Payment");

class OrderBill {
    constructor(d, a, oid) {
        super(d, a)
        this.OrderId = oid
    }
}
function makePayment(orderId) {
    return 1;
}

module.exports = {OrderBill,makePayment}