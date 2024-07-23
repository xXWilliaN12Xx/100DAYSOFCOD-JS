const http = require("http");

http
  .createServer(async (req, res) => {
    const { upperCase } = await import("upper-case");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(upperCase("hello world"));
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");