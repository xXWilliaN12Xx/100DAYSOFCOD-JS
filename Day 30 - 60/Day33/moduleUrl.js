let url = require("url");
let adr = "http://localhost:8080/default.htm?year=2024&month=julho";
let q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2024&month=julho'

let qdata = q.query; // returns an object:{ year: 2024, month: julho }
console.log(qdata.month);