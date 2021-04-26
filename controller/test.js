const Admin = require("../model/Admin");
const { MongoClient } = require("mongodb");

const adminObject = new Admin("FirstName", "lastName", "mail", "Dhaka", "NID", "25/12/1998", "017239232312", "ad001", 0);

const url = "mongodb://127.0.0.1:27017/";


MongoClient.connect(url, (error, db) => {
    if (error) throw error;
    let Iid = 'ObjectId("6086ea7b3d3a732abca4e73e")';
    
    let dbo = db.db("It_man");

    dbo.collection("abc").deleteOne({_id : Iid}, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });

});













































// async function main() {
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await listDatabases(client);

//         client.connect


//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);