const { MongoClient } = require("mongodb");

function orderListHistory(req, res) {
    client = { OrderedBy: "anwar65" };
    const url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, async (err, db) => {
        if (err) throw err;
        let dbo = db.db("Red_IT");
               
        let delivered = await dbo.collection("deliveredOrders").find(client, { projection: { _id: 0, orderId: 1, OrderStatus:1, typeOfOrder: 1 } })
             .toArray();           
        res.json(delivered);
        db.close();
    });
}


module.exports = orderListHistory;