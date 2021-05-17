const { MongoClient } = require("mongodb");
const Person = require("./Person")
const url = "mongodb://127.0.0.1:27017/";
const Event = require('events');
const emmitter = new Event();

class Admin extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, pass, aid) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.AdminId = aid;
        this.Level = 0;
    }

    orderConfirm(orderId) {
        MongoClient.connect(url, async (error, db) => {
            if (error) throw error;
            let dbo = db.db("Red_IT");
            let order = await dbo.collection("clientOrders").findOne({ orderId: orderId });
            delete order._id
            await dbo.collection("clientOrders").deleteOne({ orderId: order.orderId });
            dbo.collection("queuedOrders").insertOne(order, (err, result) => {
                if (err) throw err
                db.close();
                emmitter.emit("orderConfirm", result.insertedId == null?"confirmError":"confirmed");
                //return result.insertedId;
            });
        });
    };

    orderCancel(orderId) {
        MongoClient.connect(url, (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            dbo.collection("queuedOrders").deleteOne({ orderId: orderId }, (err, result) => {
                if (err) throw err;
                db.close();
                emmitter.emit("orderCancel",result.deletedCount==1?"deleted":"not found");
               // return result.deletedCount;
            });
        });
    };

    orderDelivery(orderId) {
        MongoClient.connect(url, async (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            let order = await dbo.collection("queuedOrders").findOne({ orderId: orderId });
            delete order._id
            await dbo.collection("queuedOrders").deleteOne({ orderId: order.orderId });
            order.OrderStatus = 0;
            await dbo.collection("deliveredOrders").insertOne(order, (err, result) => {
                if (err) throw err;
                emmitter.emit("orderDelivered", result.insertedId == null?"deliveryError":"delivered");
               // return result.insertedId;
            });
            db.close();
        });
    };

    checkBilling(orderId) {
        MongoClient.connect(url, (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            let query = { orderId: orderId };
            dbo.collection("queuedOrders").find(query, { projection: { _id: 0, due: 1 } }).toArray((err, result) => {
                if (err) throw err
                emmitter.emit("dueAmount",result[0].due);
               // return result[0].due
            });
            db.close();
        });
    };

    addEmployee(employeeObject) {
        MongoClient.connect(url, (error, db) => {
            if (error) throw error;
            let dbo = db.db("Red_IT");
            dbo.collection("employers").insertOne(employeeObject, (err, result) => {
                if (err) throw err
                db.close();
                emmitter.emit("addEmployee", result.insertedId == null?"employeeError":"employeeAdded");
                //return result.insertedId;
            });
        });
    };

    remEmployee(E_ID) {
        MongoClient.connect(url, (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            dbo.collection("employers").deleteOne({ orderId: E_ID }, (err, result) => {
                if (err) throw err;
                db.close();
                emmitter.emit("removeEmployee",result.deletedCount==1?"removed":"not found");
               // return result.deletedCount;
            });
        });
    };

    editEmployee(E_ID, setObject) {
        MongoClient.connect(url, (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            let query = { E_ID: E_ID }
            dbo.collection("employers").updateOne(query, setObject, (err, result) => {
                if (err) throw err;
                db.close();
                emmitter.emit("editEmployee", result.upsertedId == null?"updateError":"updated");
               // return result.upsertedId;
            });
        });
    };

}
module.exports = {Admin,orderConfirm,orderCancel,orderDelivery,checkBilling,addEmployee,remEmployee,editEmployee};
