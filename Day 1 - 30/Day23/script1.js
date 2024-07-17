const pessoa = {
    nome: 'willian',
    sobrenome: 'rodrigues',
    idade: 19,
    endereco: {
        rua: 'recife',
        numero: 121
    }
};

// Atribuição via desestruturação;
const {nome} = pessoa;
console.log(pessoa.nome)