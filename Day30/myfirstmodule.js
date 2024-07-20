exports.myDateTime = function () {
  return Date();
};

let http = require("http");
let dt = require("./myfirstmodule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "Text/html" });
    res.write(`The date and time are currently ${dt.myDateTime()}`);
    res.end();
  })
  .listen(8080);
