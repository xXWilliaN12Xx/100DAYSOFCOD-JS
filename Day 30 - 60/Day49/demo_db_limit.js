let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "*****",
    password: "*******",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    let sql = "SELECT * from customers ORDER BY name LIMIT 13";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});