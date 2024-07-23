// Importa o módulo 'http' para criar um servidor HTTP
let http = require("http");

// Cria um servidor HTTP
http
  .createServer(function (req, res) {
    // Define o status da resposta como 200 (OK)
    // e o tipo de conteúdo como 'text/html'
    res.writeHead(200, { "Content-Type": "text/html" });
    // Escreve a URL da requisição no corpo da resposta
    res.write(req.url);
    // Encerra a resposta
    res.end();
    // O servidor escuta na porta 8080
  })
  .listen(8080);