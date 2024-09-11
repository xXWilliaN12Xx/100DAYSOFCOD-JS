const oracledb = require("oracledb");

async function connectToDatabase() {
  let connection;

  try {
    // Cria a conexão com o banco de dados
    connection = await oracledb.getConnection({
      user: "******",
      password: "**********",
      connectString: "********",
    });

    console.log("Conexão estabelecida com sucesso");

    // Executa uma consulta SQL de exemplo
    const result = await connection.execute(`SELECT * FROM dept`);
    console.log(result.rows);
  } catch (err) {
    console.error("Erro ao conectar no banco de dados: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Erro ao fechar a conexão ", err);
      }
    }
  }
}

// Executa a função
connectToDatabase();