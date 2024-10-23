const nomes = ['Ana', 'Carlos', 'Bruna'];
const objetos = nomes.map(nome => ({ nome: nome, tamanho: nome.length }));

console.log(objetos);
// [{ nome: 'Ana', tamanho: 3 }, { nome: 'Carlos', tamanho: 6 }, { nome: 'Bruna', tamanho: 5 }]