const Person = require("./Person");

class Employer {

    constructor(fn, ln, m, a, nid, bd, cn, r, ms, eid) {
        super(fn, ln, m, a, nid, bd, cn);
        this.Role = r
        this.MemberSince = ms
        this.E_ID = eid
    }

    rejectionReq() {

    }

    sendMessage() {

    }

    viewOrder() {

    }

    submitTask() {

    }

    sendStatus() {

    }
}