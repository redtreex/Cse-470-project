const { MongoClient } = require("mongodb");
const Person = require("./Person");
const url = "mongodb://127.0.0.1:27017/";
const Event = require('events');
const emmitter = new Event();

class Client extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, pass, un, ms) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.UserName = un
        this.MemberSince = ms
        this.level = 3;
    }
}
function placeOrder(orderObject) {
    MongoClient.connect(url, (error, db) => {
        if (error) throw error;
        let dbo = db.db("Red_IT");
        dbo.collection("clientOrders").insertOne(orderObject, (err, result) => {
            if (err) throw err
            db.close();
            emmitter.emit("placeOrder", "orderPlaced");
        });
    });
};

function checkOrderStatus(orderId) {
    MongoClient.connect(url, async (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        let q = await dbo.collection("queuedOrders").find(query, { projection: { _id: 0, due: 1 } });
        q.toArray((err, result) => {
            if (err) throw err;
            if (result.length === 1) {
                emmitter.emit("orderStatus", "developing");
            }
        });
        db.close();
    });
};

function revisionReq(orderId, rev) {
    MongoClient.connect(url, async (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        let q = await dbo.collection("queuedOrders").find(query, { projection: { _id: 0, desc: 1 } }).toArray();
        let d = q[0].desc;
        d = d + "\n\nRequested Revision: " + rev;
        let value = { $set: { desc: d } }
        let n = (await dbo.collection("queuedOrders").updateOne(query, value)).modifiedCount
        emmitter.emit("revisionReq", "requested");
        db.close();
    })
};

function contactTeamLead(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        dbo.collection("queuedOrders").find(query, { projection: { _id: 0, ProjectManager: 1 } })
            .toArray((err, result) => {
                if (err) throw err;
                let nut = result[0].ProjectManager;
                let q2 = { E_ID: nut }
                dbo.collection('employers').find(q2, { projection: { _id: 0, ContactNo: 1 } })
                    .toArray((err, result) => {
                        if (err) throw err;
                        emmitter.emit("contactTeamLead", result[0].ContactNo)
                    })
                db.close();
            });
    });
};

function makePayment(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        let setObject = { $set: { due: 0 } }
        dbo.collection("queuedOrders").updateOne(query, setObject, (err, result) => {
            if (err) throw err;
            db.close();
            emmitter.emit("orderPayment", "paid");
        });
    });
};


module.exports = { Client, emmitter, placeOrder, checkOrderStatus, revisionReq, contactTeamLead, makePayment };