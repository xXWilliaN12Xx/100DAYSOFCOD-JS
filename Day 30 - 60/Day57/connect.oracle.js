const oracledb = require("oracledb");

async function connectToDatabase() {
    let connection;

    try {
        // Crie a conexão com o banco de dados
        connection = await oracledb.getConnection({
            user: 'SYSTEM',
            password: 'xXWilliaN12Xx',
            connectString: '127.0.0.1:1521/orcl'
        });

        console.log('Conexão estabelecida com sucesso');

        // Execute uma consulta SQL de exemplo
        const result = await connection.execute(`SELECT * FROM dept`);
        console.log(result.rows);

    } catch (err) {
        console.error('Erro ao conectar no banco de dados: ', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Erro ao fechar a conexão ', err);
            }
        }
    }
}

connectToDatabase();