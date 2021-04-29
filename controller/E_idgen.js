let generatedID = "";
function  geID() {
    const { MongoClient } = require("mongodb");
    const url = "mongodb://127.0.0.1:27017/";
    const date = new Date;
    let year = date.getFullYear() + "";
    year = year.slice(2, 4);
    let m = (date.getMonth() + 1);
    let month = (m < 10) ? "0" + m : m;
    let regex = "E" + year + month + "";
    const idGen = (result) => {       
        if (result.length == 0) {
            generatedID = regex + "001";
        }else{
            result.sort();
            let tempID = parseInt((result[result.length - 1].E_ID).slice(5, 8));
            tempID++;
            tempID = (tempID < 10) ? "00" + tempID : (tempID < 100) ? "0" + tempID : tempID;
            generatedID = regex + tempID
        }   
        console.log(generatedID);
     }
    MongoClient.connect(url, async (error, db) => {
        if (error) throw error;
        let seq = { E_ID: new RegExp(regex) };
        let dbo = db.db("Red_IT");
       let result = await dbo.collection("employers").find(seq, { projection: { _id: 0, E_ID: 1 } }).toArray();      
       idGen(result);
       db.close();
    });
}
function genNewId(){
    geID();
    return generatedID;
}
module.exports = genNewId;




























// function generateID(res,req){

// }
// module.exports = generateID;