const Admin = require("../model/Admin");
const Developer = require("../model/Developer");
const TeamLead = require("../model/TeamLead");

const { MongoClient } = require("mongodb");

let MEE = new Admin("Sakibur", "Rahman", "sakib86@gmail.com", "Dhaka", "NID", "25/12/1998", "01923921231","AD1234", "redmin");

const url = "mongodb://127.0.0.1:27017/";


MongoClient.connect(url, (error, db) => {
  if (error) throw error;

  let dbo = db.db("Red_IT");

  dbo.collection("admin").insertOne(MEE,(err,result)=>{
    if(err)throw err;
    console.log(result);
    db.close();
  });

});
