const Employer = require("./Employer")

class Developer extends Employer {
    constructor(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid, tl) {
        super(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid,15000);
        this.TeamLead = tl
        this.level=2;
    }
}
module.exports = Developer;