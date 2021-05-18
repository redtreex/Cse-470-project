const { MongoClient } = require("mongodb");

let emp = { E_ID: "E2104002" }; //Mahfuz Rahman

function currentOrderEmp(req, res) {
    const url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, async (err, db) => {
        if (err) throw err;
        let dbo = db.db("Red_IT");
        let queued = await dbo.collection("employers").find(emp, { projection: { _id: 0, TeamLead: 1 } })
            .toArray();

        let TeamLead = { ProjectManager: queued[0].TeamLead }
        let order = await dbo.collection("queuedOrders").find(TeamLead, { projection: { _id: 0, orderId: 1,due:1, typeOfOrder: 1, desc: 1, DeliveryDate: 1 } })
            .toArray()
        res.json(order[0])
        db.close();
    });
}

module.exports = currentOrderEmp;

