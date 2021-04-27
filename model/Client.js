const Person = require("./Person");

class Client extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, pass, un, cuid, ms) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.UserName = un
        this.ClientUserID = cuid
        this.MemberSince = ms
        this.level = 3;
    }

    placeOrder() {

    };

    checkOrderStatus() {

    };

    revisionReq() {

    };

    contactTeamLead() {

    };

    makePayment() {

    };

    viewOrderHistory() {

    };
}

module.exports = Client;