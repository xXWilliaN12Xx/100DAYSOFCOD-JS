let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    let sql = "DROP TABLE IF EXISTS costumers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});