const Payment = require("./Payment");
class Salary {
    constructor(d, a, eid) {
        super()
        this.E_ID = eid
    }

}
function giveSalary(E_ID) {
    let transactionStatus = { status: 200 , E_ID: E_ID}

    return transactionStatus.status
}

module.exports = {Salary,giveSalary}