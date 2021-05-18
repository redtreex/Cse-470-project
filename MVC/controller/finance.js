
const { MongoClient } = require("mongodb");

function finance(req, res) {

    let response = {
        employerList: [],
        orderList: [],
        status: []
    }


    const empValue = (employers) => {
        for (let i = 0; i < employers.length; i++) {
            employers[i].Name = employers[i].FirstName + " " + employers[i].LastName
            delete employers[i].FirstName;
            delete employers[i].LastName;
            delete employers[i]._id;
        }
        response.employerList = employers;
    }

    const ordValue = (orders) => {
        response.orderList = orders;
    }

    const setStatus = (balance) => {

        let queued = response.orderList.length
        let expense = 0;
        response.employerList.forEach(element => {
            expense = expense + element.salary
        });
        let b = balance[0].totalBalance;

        let status = { totalBalance: b, ordersOnQueue: queued, monthlyExpense: expense };
        response.status[0] = status;
        console.log(response)
    }


    const url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, async (error, db) => {
        if (error) throw error;
        let dbo = db.db("Red_IT");
        let e_result = await dbo.collection("employers").find({}, { projection: { E_ID: 1, FirstName: 1, LastName: 1, Role: 1, MemberSince: 1, salary: 1 } })
            .toArray()

        let o_result = await dbo.collection("queuedOrders").find({}, { projection: { _id: 0, orderId: 1, due: 1, typeOfOrder: 1 } })
            .toArray()

        let balance = await dbo.collection("status").find({}, { projection: { _id: 0, totalBalance: 1 } }).toArray()

        empValue(e_result);
        ordValue(o_result);
        setStatus(balance);

        // console.log(response.status[0]);

        db.close();
        res.json(response);
    });



}

module.exports = finance;