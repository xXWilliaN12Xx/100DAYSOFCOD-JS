function fibonacci(numero) {
  if (numero <= 0) {
    return [];
  }
  let fib = [0, 1];

  for (let i = 2; i < numero; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, numero);
}

function solicicarInteiroPositivo() {
    let numero;
    do {
        numero = 5
    } while (isNaN(numero) || numero <= 0);

    return numero;
}

function main() {
    const numero = solicicarInteiroPositivo();
    const sequenciaFibonacci = fibonacci(numero);

    console.log(`Sequencia de Fibonacci até ${numero} termos`, sequenciaFibonacci)
}

main();