let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    let sql = "DROP TABLE customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`table deleted ${result}`);
    });
});