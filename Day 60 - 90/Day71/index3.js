const produto = {};
let precoPrivado = 0;

Object.defineProperty(produto, "preco", {
  get() {
    return `R$ ${precoPrivado.toFixed(2)}`;
  },
  set(novoPreco) {
    if (novoPreco >= 0) {
      precoPrivado = novoPreco;
    } else {
      console.error("O preço não pode ser negativo!");
    }
  },
  enumerable: true,
  configurable: false,
});

produto.preco = 100.5;
console.log(produto.preco);

produto.preco = -10; // Tenta definir um preço inválido
// Erro: O preço não pode ser negativo!
