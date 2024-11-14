class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}`);
    }
}

const estudante1 = new Estudante("Willian", 20, "classes em javascript");
estudante1.saudacao();
estudante1.estudar();