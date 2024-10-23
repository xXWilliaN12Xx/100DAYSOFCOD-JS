const pessoa = {
  nome: "Willian",
  sobrenome: "Silva",

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },

  set nomeCompleto(valor) {
    const partes = valor.split(" ");
    this.nome = partes[0];
    this.sobrenome = partes[1] || "";
  },
};

console.log(pessoa.nomeCompleto);

pessoa.nomeCompleto = "Willian Rodrigues";
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
