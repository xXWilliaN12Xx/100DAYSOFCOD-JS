let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    let sql = "INSERT INTO users (name, favorite_product) VALUES ?";
    let values = [
        ['John', 154],
        ['Peter', 154],
        ['Amy', 155]
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});