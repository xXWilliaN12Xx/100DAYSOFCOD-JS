const produto = { preco: 0 };

Object.defineProperty(produto, "precoComDesconto", {
  get() {
    return this.preco * 0.9;
  },
  set(valor) {
    if (valor >= 0) {
      this.preco = valor;
    } else {
      console.error("Preço inválido!");
    }
  },
});

produto.precoComDesconto = 1000;
console.log(produto.preco);
console.log(produto.precoComDesconto);
