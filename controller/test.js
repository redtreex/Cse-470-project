const Admin = require("../model/Admin");
const Developer = require("../model/Developer");
const TeamLead = require("../model/TeamLead");
const Clients = require("../model/Client");
const Order = require("../model/Order")
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/";

console.log(orders);

MongoClient.connect(url, (error, db) => {
  if (error) throw error;

  let dbo = db.db("Red_IT");

});

