// Importa o módulo 'http' para criar um servidor HTTP
const http = require("http");

// Importa o módulo 'fs' para interagir com o sistema de arquivos
const fs = require("fs");

// Cria um servidor HTTP
http
  .createServer(function (req, res) {
    // Lê o arquivo 'index.html'
    fs.readFile("index.html", function (err, data) {
      // Verifica se ocorreu um erro ao ler o arquivo
      if (err) {
        // Se ocorreu um erro, responde com o status 500 (Erro Interno do Servidor)
        // e um texto indicando que houve um erro
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        // Encerra a resposta
        return res.end();
      }
      // Se não ocorreu erro, responde com o status 200 (OK)
      // e define o tipo de conteúdo como 'text/html'
      res.writeHead(200, { "Content-Type": "text/html" });
      // Escreve o conteúdo do arquivo 'index.html' no corpo da resposta
      res.write(data);
      // Encerra a resposta
      return res.end();
    });
    // O servidor escuta na porta 8080
  })
  .listen(8080, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando
    console.log("Server running at http://localhost:8080/");
  });