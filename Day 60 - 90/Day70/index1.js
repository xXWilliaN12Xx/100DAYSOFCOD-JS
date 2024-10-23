const pessoa = {
  nome: "Williane",

  get saudacao() {
    return `Olá, meu nome é ${this.nome}.`;
  },

  set alterarNome(novoNome) {
    this.nome = novoNome.trim(); // Remove espaços desnecessários
  },
};

console.log(pessoa.saudacao);

pessoa.alterarNome = "Willian";
console.log(pessoa.saudacao);
