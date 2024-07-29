let mysql = require('mysql2');

let connect = mysql.createConnection({
    host: 'localhost',
    user: '******',
    password: '*******',
    database: 'mydb'
});

connect.connect(function (error) {
    if (error) throw error;
    console.log('Connected!');
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    connect.query(sql, function (error, result) {
        if (error) throw error;
        console.log('Table created');
    });
});