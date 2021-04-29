const Admin = require("../model/Admin");
const Developer = require("../model/Developer");
const TeamLead = require("../model/TeamLead");
const Clients = require("../model/Client");
const Order = require("../model/Order")
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/Red_IT";

console.log(orders);

MongoClient.connect(url, (error, db) => {
 
  if (error) throw error;
  db.collections("employers").find({},{projection:{_id:1 , FirstName:1}}).toArray((err,result)=>{
    if (err) throw err;
    console.log(result);
    db.close();
  });

});

