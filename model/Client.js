const Person = require("./Person");

class Client extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, un, cuid, ms) {
        super(fn, ln, m, a, nid, bd, cn);
        this.UserName = un
        this.ClientUserID = cuid
        this.MemberSince = ms
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