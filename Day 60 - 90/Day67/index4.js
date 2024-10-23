const pessoas = [
  { nome: "Ana", idade: 21 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 16 },
];

const agrupadoPorIdade = pessoas.reduce((acumulador, pessoa) => {
  const { idade } = pessoa;
  if (!acumulador[idade]) {
    acumulador[idade] = [];
  }
  acumulador[idade].push(pessoa);
  return acumulador;
}, {});

console.log(agrupadoPorIdade);
/* 
Saída:
{
  '16': [ { nome: 'Carlos', idade: 16 } ],
  '21': [ { nome: 'Ana', idade: 21 } ],
  '30': [ { nome: 'Bruno', idade: 30 } ]
}
*/