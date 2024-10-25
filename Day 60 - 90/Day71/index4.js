const livro = {};

Object.defineProperties(livro, {
  titulo: {
    value: "JavaScript Avançado",
    writable: false,
    enumerable: true,
  },
  autor: {
    value: "Desconhecido",
    enumerable: true,
  },
  preco: {
    get() {
      return this._preco;
    },
    set(valor) {
      if (valor < 0) {
        console.error("Preço inválido!");
      } else {
        this._preco = valor;
      }
    },
    enumerable: true,
  },
});

livro.preco = 50;
console.log(livro.preco); // 50

livro.preco = -5; // Preço inválido!
