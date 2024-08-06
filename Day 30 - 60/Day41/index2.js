const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Continue continua para a proxima iteração.
// break sai do laço.

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue;
    }

    if (numero === 7) {
        break;
    }

    console.log(numero)
}