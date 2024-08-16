let mysql = require("mysql2");

let connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xXWilliaN12Xx",
    database: "mydb"
});

connect.connect(function (err) {
    if (err) throw err;
    connect.query("DELETE FROM customers WHERE address = 'Mountain 21'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});