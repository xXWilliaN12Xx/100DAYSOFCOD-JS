let mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xXWilliaN12Xx',
    database: 'mydb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    let sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table altered');
    });
});