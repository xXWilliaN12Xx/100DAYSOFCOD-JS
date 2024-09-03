// Função que recebe um callback
function processarUsuario(usuario, callback) {
    console.log(`Processando o usuário ${usuario}...`);

    // Simula um processamento demorado com setTimeout
    setTimeout(() => {
        console.log(`Processamento de usuário ${usuario} concluído.`)

        // Chama o callback após o processamento
        callback();
    }, 2000); // 2 segundos de atraso
}

// Função de callback
function mostrarMensagemFinal () {
    console.log("Todos os usuários foram processados com sucesso!");
}

// Chamando a função com um callback
processarUsuario("Maria", mostrarMensagemFinal);