function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    comprimentar() {
      return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`;
    },
  };
}

const pessoa1 = criarPessoa("Alice", 25);
const pessoa2 = criarPessoa("João", 30);

console.log(pessoa1.comprimentar());
// 'Olá, meu nome é Alice e eu tenho 25 anos.'
console.log(pessoa2.comprimentar());
// 'Olá. meu nome é João e eu tenho 30 anos.'
