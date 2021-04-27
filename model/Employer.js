const Person = require("./Person");

class Employer extends Person{

    constructor(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid) {
        super(fn, ln, m, a, nid, bd, cn, pass);
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

module.exports = Employer;