const produtos = [
  { nome: "Celular", preco: 1500, quantidade: 3 },
  { nome: "Fone", preco: 180, quantidade: 10 },
  { nome: "Cabo USB", preco: 30, quantidade: 25 },
  { nome: "Mouse", preco: 80, quantidade: 5 },
];

const produtosCaros = produtos.filter((produto) => {
  return produto.preco > 50;
});

const valoresTotais = produtosCaros.map((produto) => ({
  nome: produto.nome,
  valorTotal: produto.preco * produto.quantidade,
}));

console.log(valoresTotais);

const valorTotal = valoresTotais.reduce((acum, produto) => {
  return acum + produto.valorTotal;
}, 0);

console.log(`Valor total dos produtos caros: R$${valorTotal}`);