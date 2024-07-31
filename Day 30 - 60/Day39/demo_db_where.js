let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result){
        if (err) throw err;
        console.log(result);
    });
});