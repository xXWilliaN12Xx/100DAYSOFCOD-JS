let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    let sql = "SELECT * from customers ORDER BY name LIMIT 3";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});