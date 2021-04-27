const Employer = require("./Employer");

class TeamLead extends Employer{
    constructor(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid, exp) {
        super(fn, ln, m, a, nid, bd, cn, r, ms, pass,eid);
        this.xp = exp
        this.level = 1;
    }

    cancelProject() {

    }

    contactClient() {

    }

    submitProject() {

    }

    viewMembers() {

    }
}

module.exports = TeamLead;