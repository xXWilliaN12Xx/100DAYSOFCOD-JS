function fora() {
    const mensagem = 'Olá do escopo externo!';

    function dentro() {
        console.log(mensagem) // Acessa a variável "mensagem" do escopo externo
    }

    dentro();
}

fora(); // Saída: "Olá do escopo externo!"