const verdadeira = true;

// Let contém escopo de blobo { ... bloco }
// Var só tem escopo de função

let nome = 'luiz'; // Criando
var nome2 = 'luiz'; // Criando

if (verdadeira) {
    let nome = 'otavio'; // Criando
    var nome2 = 'Rogerio'; // Redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // Redeclarando
        let nome = 'Outra coisa'; // Criando
    }
};

console.log(nome, nome2); // Valor é inserido no terminal.