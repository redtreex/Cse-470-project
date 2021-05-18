const Payment = require("./Payment");

class OrderBill {
    constructor(d, a, oid) {
        super(d, a)
        this.OrderId = oid
    }
    makePayment() {
          return "Third Party Has confirmed payment"
    }
}