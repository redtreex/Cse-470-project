const {Employer} = require("./Employer");
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";
const Event = require('events');
const emmitter = new Event();

class TeamLead extends Employer {
    constructor(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid, exp) {
        super(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid, 17500);
        this.xp = exp
        this.level = 1;
    }
}
function cancelProject(orderId) {
    MongoClient.connect(url, async (error, db) => {
        if (error) throw error;
        let dbo = db.db("Red_IT");
        let order = await dbo.collection("queuedOrders").findOne({ orderId: orderId });
        delete order._id
        await dbo.collection("queuedOrders").deleteOne({ orderId: order.orderId });
        dbo.collection("clientOrders").insertOne(order, (err, result) => {
            if (err) throw err
            db.close();
            emmitter.emit("orderCancelled", "cancelled");
            return result.insertedId;
        });
    });
}

function contactClient(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        dbo.collection("queuedOrders").find(query, { projection: { _id: 0, OrderedBy: 1 } })
            .toArray((err, result) => {
                if (err) throw err;
                let nut = result[0].OrderedBy;
                let q2 = { UserName: nut }
                dbo.collection('clients').find(q2, { projection: { _id: 0, ContactNo: 1 } })
                    .toArray((err, result) => {
                        if (err) throw err;
                        emmitter.emit("contactClient", result[0].ContactNo)
                    })
                db.close();
            });
    });
}

function submitProject(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId : orderId }
        let setObject = { $set: { OrderStatus: 0 } }
        dbo.collection("queuedOrders").updateOne(query, setObject, (err, result) => {
            if (err) throw err;
            db.close();
            emmitter.emit("submitProject", "submitted");
            return result.upsertedCount;
        });
    });
}

module.exports = { TeamLead, submitProject, emmitter, cancelProject, contactClient };