
const {MongoClient} = require("mongodb");

function orderList(req, res) {    
    const url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url,(err, db) => {
        if (err) throw err;
        let dbo = db.db("Red_IT");
        dbo.collection("queuedOrders").find({}, { projection: { _id: 0, orderId: 1, due: 1, typeOfOrder: 1 } })
            .toArray((err,result)=>{
                if (err) throw err;
                res.json(result);
            })
            db.close();
    });
}

module.exports = orderList;