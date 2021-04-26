const mongoose = require("mongoose");

const Person = require("./Person")
//const Schema = mongoose.Schema;

class Admin extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, aid, alvl) {
        super(fn, ln, m, a, nid, bd, cn);
        this.adminId = aid
        this.adminLevel = alvl
    }
    // getSchema() {
    //     const admin_schema = new Schema({
    //         FirstName: String,
    //         LastName: String,
    //         Mail: String,
    //         Address: String,
    //         Birthdate: Date,
    //         ContactNo: String,
    //         Admin_id: String,
    //         level: Number
    //     });
    //     return mongoose.model("admin",admin_schema);
    // };

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