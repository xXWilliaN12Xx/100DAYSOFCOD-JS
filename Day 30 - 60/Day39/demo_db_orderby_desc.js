let mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xXWilliaN12Xx',
    database: 'mydb'
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});