function fibonacci(n) {
    if (n <= 1) {
        return n; // Condição de parada
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
    }
}

console.log(fibonacci(6)); // Saída: 8