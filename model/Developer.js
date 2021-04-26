const Employer = require("./Employer")

class Developer {
    constructor(fn, ln, m, a, nid, bd, cn, r, ms, eid, tl, Dc, ar) {
        super(fn, ln, m, a, nid, bd, cn, r, ms, eid);
        this.TeamLead = tl
        this.DeveloperCategory = Dc
        this.AssignedRole = ar
    }
}