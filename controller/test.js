const Admin = require("../model/Admin");
const Developer = require("../model/Developer");
const TeamLead = require("../model/TeamLead");
const Clients = require("../model/Client");
const Order = require("../model/Order")
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
let orderId = "ord789"
let rev = "Do this and do that and that too!"

const ff = () => {
  let nut = "nutted";
  MongoClient.connect(url, async (error, db) => {
    let dbo = db.db("Red_IT");
    if (error) throw error;
    let query = { orderId: orderId };
    let project_manager = await dbo.collection("queuedOrders").find(query, { projection: { _id: 0, ProjectManager: 1 } })
    project_manager.toArray((err,result)=>{
     if (err) throw err;
     nut = result[0].ProjectManager;
     return nut;
    });   
    db.close();
  });
}

console.log(ff())