const estudantes = [
  { nome: "Ana", nota: 8 },
  { nome: "Pedro", nota: 5 },
  { nome: "Maria", nota: 9 },
  { nome: "João", nota: 6 },
  { nome: "Lucas", nota: 7 },
];

const aprovados = estudantes.filter((estudante) => {
  return estudante.nota >= 7;
});

const notas = aprovados.map((estudante) => {
  return estudante.nota;
});

const media = notas.reduce((acum, nota) => {
  return acum + nota / notas.length;
}, 0);

console.log(`Média das notas dos aprovados: ${media.toFixed(2)}`);