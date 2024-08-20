let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    sql = "CREATE TABLE products (id INT(255), name VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});