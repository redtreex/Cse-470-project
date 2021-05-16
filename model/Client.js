const { MongoClient } = require("mongodb");
const Person = require("./Person");

class Client extends Person {
    constructor(fn, ln, m, a, nid, bd, cn, pass, un, ms) {
        super(fn, ln, m, a, nid, bd, cn, pass);
        this.UserName = un
        this.MemberSince = ms
        this.level = 3;
    }

    placeOrder(orderObject) {
        MongoClient.connect(url, (error, db) => {
            if (error) throw error;
            let dbo = db.db("Red_IT");
            dbo.collection("clientOrders").insertOne(orderObject, (err, result) => {
                if (err) throw err
                db.close();
                return result.insertedId;
            });
        });
    };

    checkOrderStatus(orderId) {
        MongoClient.connect(url, async (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;
            let query = { orderId: orderId };
            let q = await dbo.collection("queuedOrders").find(query, { projection: { _id: 0, due: 1 } });
            let d = await dbo.collection("deliveredOrders").find(query, { projection: { _id: 0, due: 1 } });
            q.toArray((err, result) => {
                if (err) throw err;
                if (result.length === 1) {
                    return "Under Developement";
                }
            });
            d.toArray((err, result) => {
                if (err) throw err;
                if (result.length === 1) {
                    return "Order Delivered";
                }
            });
            db.close();
        });
    };

    revisionReq(orderId, rev) {
        MongoClient.connect(url, async (error, db) => {
            let dbo = db.db("Red_IT");
            if (error) throw error;    
              let query = { orderId: orderId };
              let q = await dbo.collection("queuedOrders").find(query, { projection: { _id: 0, desc: 1 } }).toArray();
              let d = q[0].desc;
              d = d + "\n\nRequested Revision: " + rev;
              let value = { $set: { desc: d } }
              let n = (await dbo.collection("queuedOrders").updateOne(query, value)).modifiedCount
              console.log(n);
            db.close();
          })
    };

    contactTeamLead() {
      
    };

    makePayment() {

    };
}

module.exports = Client;