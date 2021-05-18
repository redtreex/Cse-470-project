const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";
const Event = require('events');
const emmitter = new Event();
let orderId = "ord890"

MongoClient.connect(url, (error, db) => {
    let dbo = db.db("Red_IT");
    if (error) throw error;
    let query = { orderId: orderId };
    let setObject = { $set: { due: 0 } }
    dbo.collection("queuedOrders").updateOne(query, setObject, (err, result) => {
        if (err) throw err;
        db.close();
        console.log(result.modifiedCount)
        emmitter.emit("orderPayment", "paid");
    });
});