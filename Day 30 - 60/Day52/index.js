let listaTelefonica = {}

function incluir(nome, numero) {
    listaTelefonica[nome] = numero;
    return `${nome} incluído com sucesso.`
};

function excluir(nome) {
    if (nome in listaTelefonica) {
        delete listaTelefonica[nome];
        return `${nome} excluído com sucesso.`
    } else {
        return `${nome} não pode ser excluído.`
    }
};

function pesquisar(nome) {
    if (nome in listaTelefonica) {
        return `O número de ${nome} é ${listaTelefonica[nome]} `
    } else {
        return `${nome} não encontrado na lista.`
    };
};

console.log(incluir('mauricio', 3829102));
console.log(incluir('marcelo', 3823901));
console.log(incluir('matheus', 3829320));
console.log(excluir('mario'));
console.log(excluir('matheus'));
console.log(pesquisar('mauricio'));
console.log(pesquisar('mauro'));
console.log(listaTelefonica)