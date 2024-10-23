const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 },
];

pessoas.forEach((pessoa) => {
  pessoa.idade += 1; // Incrementa a idade de cada pessoa em 1
});

console.log(pessoas);