let fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Update!')
});