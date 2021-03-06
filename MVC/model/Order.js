class Order {
    constructor(oid, d, od = new Date, dd, ob, pm, os, toO, desc) {
        this.OrderId = oid
        this.DateOfOrder = od
        this.due = d
        this.DeliveryDate = dd
        this.OrderedBy = ob
        this.ProjectManager = pm
        this.OrderStatus = os
        this.typeOfOrder = toO
        this.desc = desc
    }
}
function calculatePrice(toO) {
    switch (toO) {
        case 0:
            return 10000;
        case 1:
            return 15000;
        case 2:
            return 17500;
        case 3:
            return 35000;
        default:
            break;
    }
};


module.exports = { Order, calculatePrice };