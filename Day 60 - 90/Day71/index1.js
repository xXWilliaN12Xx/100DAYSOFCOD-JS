function produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: false, // altera o valor
        configurable: false // configuravel
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome, // valor
            writable: false, // altera o valor
            configurable: false // configuravel
        },
        preco: {
            enumerable: true, // mostra chave
            value: preco, // valor
            writable: false, // altera o valor
            configurable: false // configuravel
        }
    })
};

const p1 = new produto('camiseta', 20, 3);
console.log(p1);