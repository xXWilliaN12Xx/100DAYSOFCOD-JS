const produtos = [
    {nome: 'Camisa', preco: 50, emEstoque: true},
    {nome: 'Calça', preco: 80, emEstoque: false},
    {nome: 'Tênis', preco: 120, emEstoque: true},
    {nome: 'Boné', preco: 30, emEstoque: true}
];

const emEstoque = produtos.filter(produto => produto.emEstoque);

const comDesconto = emEstoque.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9
}));

const total = comDesconto.reduce((acum, produto) => acum + produto.preco, 0);

console.log(`Valor total: R$${total.toFixed(2)}`);