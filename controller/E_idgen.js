
let generatedID = "";

async function  generateID() {
    const { MongoClient } = require("mongodb");
    const url = "mongodb://127.0.0.1:27017/";
    const date = new Date;
    let year = date.getFullYear() + "";
    year = year.slice(2, 4);
    let m = (date.getMonth() + 1);
    let month = (m < 10) ? "0" + m : m;
    let regex = "E" + year + month + "";

    MongoClient.connect(url, (error, db) => {
        if (error) throw error;
        let seq = { E_ID: new RegExp(regex) };
        let dbo = db.db("Red_IT");

        dbo.collection("employers").find(seq, { projection: { _id: 0, E_ID: 1 } }).toArray((err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                generatedID = regex + "001";
            } else {
                result.sort();
                let tempID = parseInt((result[result.length - 1].E_ID).slice(5, 8));
                tempID++;
                tempID = (tempID < 10) ? "00" + tempID : (tempID < 100) ? "0" + tempID : tempID;
                generatedID = regex + tempID
            }
            db.close();
            return generatedID;
        });


    });
}

let id = generateID();
console.log(id);





























// function generateID(res,req){

// }
// module.exports = generateID;