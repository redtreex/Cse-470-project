const Admin = require("../model/Admin");
const Developer = require("../model/Developer");
const TeamLead = require("../model/TeamLead");
const Clients = require("../model/Client");
const Order = require("../model/Order")
const { MongoClient } = require("mongodb");
const Event = require('events');
const emmitter = new Event();

const url = "mongodb://127.0.0.1:27017";

const ff = (orderId) => {
  MongoClient.connect(url, (error, db) => {
    let dbo = db.db("Red_IT");
    if (error) throw error;
    let query = { orderId: orderId };
    let setObject = { $set: { due: 0 } }
    dbo.collection("queuedOrders").updateOne(query, setObject, (err, result) => {
      if (err) throw err;
      db.close();
      emmitter.emit("editEmployee", "updated");
    });
  });
}

ff("ord890")
module.exports = { ff, emmitter };