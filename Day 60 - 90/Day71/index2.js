const pessoa = {};

// Definindo uma propriedade 'nome'
Object.defineProperty(pessoa, "nome", {
  value: "Ana",
  writable: false, // Não pode ser alterado
  enumerable: true, // Será visível em 'Object.keys'
  configurable: false, // Não pode ser reconfigurada ou apagada
});

console.log(pessoa.nome); // Ana

// Tentando alterar o nome (não funciona por causa de writable: false)
pessoa.nome = "carlos";
console.log(pessoa.nome); // Ana
