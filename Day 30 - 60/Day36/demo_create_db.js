let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: '*****',
    password: '********'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Conected!');
    connection.query('CREATE DATABASE mydb', function (err, result) {
        if (err) throw err;
        console.log('Database created');
    });
});