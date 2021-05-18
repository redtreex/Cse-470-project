
const { MongoClient } = require("mongodb");

function employerList(req, res) {   
    const url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, (error, db) => {
        if (error) throw error;
        let dbo = db.db("Red_IT");
        dbo.collection("employers").find({}, { projection: { E_ID: 1, FirstName: 1, LastName: 1, Role: 1, MemberSince: 1 } })
            .toArray((err, result) => {
                if (err) throw err;
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    result[i].Name = result[i].FirstName + " " + result[i].LastName
                    delete result[i].FirstName;
                    delete result[i].LastName;
                    delete result[i]._id;
                }
                console.log(result);
                res.json(result);
            });
            db.close();
    });
}

module.exports = employerList;