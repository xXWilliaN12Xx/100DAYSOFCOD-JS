let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (error) {
    if (error) throw error;
    con.query("SELECT * FROM customers ORDER BY name", function (error, result) {
        if (error) throw error;
        console.log(result);
    });
});