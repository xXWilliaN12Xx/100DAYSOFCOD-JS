function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.saudacao = function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    };
}

const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 40);

pessoa1.saudacao(); // Olá, meu nome é Ana e tenho 25 anos.
pessoa2.saudacao(); // Olá, meu nome é Carlos e tenho 30 anos.