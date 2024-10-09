// Retorna as pessoas com nome maior que 7;
// Retorna as pessoas com mais de 50 anos;
// Retorna os nomes que termina com a letra 'a';
const pessoas = [
  { nome: "Luis", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 31 },
  { nome: "Wallace", idade: 47 },
  { nome: "Rafaela", idade: 20 },
];
const nomesGrandes = pessoas.filter(function (obj) {
  return obj.nome.length >= 7;
});

const maiorIdade = pessoas.filter(function (obj) {
  return obj.idade > 50;
});

const nomesComLetraANoFinal = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a");
});

console.log(nomesGrandes);
console.log("========================");
console.log(maiorIdade);
console.log("========================");
console.log(nomesComLetraANoFinal);