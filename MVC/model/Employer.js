const Person = require("./Person");
const { MongoClient } = require("mongodb")
const url = "mongodb://127.0.0.1:27017/";
const Event = require('events');
const emmitter = new Event();

class Employer extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, r, ms, pass, eid, s) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.Role = r
        this.MemberSince = ms
        this.E_ID = eid
        this.salary = s
    }
}

function viewOrder(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        dbo.collection("queuedOrders").find(query, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err
            emmitter.emit("viewOrder", "[Object object]");
            return result;
        });
        db.close();
    });
}

function sendStatus(orderId) {
    MongoClient.connect(url, (error, db) => {
        let dbo = db.db("Red_IT");
        if (error) throw error;
        let query = { orderId: orderId };
        dbo.collection("queuedOrders").find(query, { projection: { _id: 0, OrderStatus: 1 } }).toArray((err, result) => {
            if (err) throw err
            emmitter.emit("sendStatus", result[0].OrderStatus);
            return result[0].OrderStatus;
        });
        db.close();
    });
}


module.exports = { Employer, emmitter, viewOrder, sendStatus };