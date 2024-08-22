let MongoCliente = require("mongodb").MongoCliente;
let url = "mongodb://localhost:27017/mydb";

MongoCliente.connect(url,function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});