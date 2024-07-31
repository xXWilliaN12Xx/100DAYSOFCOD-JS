// Importa o módulo 'mysql2' que é usado para se conectar e interagir com um banco de dados MySQL.
let mysql = require("mysql2");

// Cria uma conexão com o banco de dados MySQL, especificando o host, o usuário, a senha e o banco de dados.
let con = mysql.createConnection({
  host: "localhost", // Endereço do servidor onde o MySQL está rodando. 'localhost' significa que está rodando na mesma máquina.
  user: "root", // Nome de usuário para autenticação no banco de dados.
  password: "xXWilliaN12Xx", // Senha correspondente ao usuário.
  database: "mydb", // Nome do banco de dados ao qual se deseja conectar.
});

// Estabelece a conexão com o banco de dados.
con.connect(function (err) {
  if (err) throw err; // Se houver um erro ao tentar se conectar, lança uma exceção e interrompe a execução.

  // Executa uma consulta SQL para selecionar todos os registros da tabela 'customers'.
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err; // Se houver um erro ao executar a consulta, lança uma exceção.

    // Exibe o resultado da consulta no console.
    console.log(result);
  });
});