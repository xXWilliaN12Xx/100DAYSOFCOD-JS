// Importa o módulo HTTP, que permite criar um servidor web
let http = require("http");

// Importa o módulo URL, que permite analisar a URL da solicitação
let url = require("url");

// Cria um servidor HTTP
http
  .createServer(function (req, res) {
    // Configura o cabeçalho da resposta HTTP com o status 200 (OK) e o tipo de conteúdo como HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Analisa a URL da solicitação, extraindo os parâmetros da consulta
    // O segundo argumento 'true' indica que os parâmetros devem ser convertidos em um objeto
    let q = url.parse(req.url, true).query;

    // Constrói uma string com os valores dos parâmetros 'year' e 'month' da URL
    let txt = q.year + " " + q.month;

    // Envia a resposta para o cliente com a string construída
    res.end(txt);

    // Faz o servidor escutar na porta 8080
  })
  .listen(8080);