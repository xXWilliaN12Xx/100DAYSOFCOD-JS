class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Willian', 'Rodrigues');
const p2 = new Pessoa('Maria', 'Rodrigues');
const p3 = new Pessoa('kelly', 'Rodrigues');
const p4 = new Pessoa('negan', 'Rodrigues');
console.log(p1, p2, p3, p4)