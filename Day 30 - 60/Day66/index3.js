const  pessoas = [
    {nome: 'Mari', idade: 18 },
    {nome: 'João', idade: 23},
    {nome: 'cleyton', idade: 15},
    {nome: 'Williane', idade: 8}
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);