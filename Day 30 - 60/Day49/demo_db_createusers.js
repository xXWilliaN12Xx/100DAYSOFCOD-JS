let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    sql = "CREATE TABLE users (name VARCHAR(255), favorite_product INT(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});