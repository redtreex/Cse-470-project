
const Person = require("./Person")

class Admin extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, pass,aid) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.AdminId = aid;
        this.Level = 0;
    }

    orderConfirm() {

    };

    orderCancel() {

    };

    orderDelivery() {

    };

    checkBilling() {

    };

    checkClientHistory() {

    };

    addEmployee() {

    };

    remEmployee() {

    };

    editEmployee() {

    };

    currentOrder() {

    };

    orderEdit() {

    };


}
module.exports = Admin;