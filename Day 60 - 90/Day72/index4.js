function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const willian = new Pessoa("Willian", 20);
const carlos = new Pessoa("Carlos", 25);

willian.falar(); // Oi, meu nome é Willian e tenho 20 anos.
carlos.falar(); // Oi, meu nome é Carlos e tenho 25 anos.
