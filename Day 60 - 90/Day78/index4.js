class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}

const pessoa2 = new Pessoa("bee");
console.log(pessoa2.nome);
pessoa2.nome = "wolf";
console.log(pessoa2.nome);