const vendas = [
  { data: "2024-10-01", valor: 150 },
  { data: "2024-10-02", valor: 90 },
  { data: "2024-10-03", valor: 120 },
  { data: "2024-10-04", valor: 80 },
  { data: "2024-10-05", valor: 200 },
];

const vendasFiltradas = vendas.filter((venda) => {
  return venda.valor > 100;
});

const valores = vendasFiltradas.map((venda) => {
  return venda.valor;
});

const total = valores.reduce((acum, valor) => {
  return acum + valor;
}, 0);

console.log(`Total de vendas acima de R$100: R${total}`);