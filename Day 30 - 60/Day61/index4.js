function somaArray(arr) {
    if (arr.length === 0) {
        return 0; // Condição de parada
    } else {
        return arr[0] + somaArray(arr.slice(1)); // Chamada recursiva
    }
}

console.log(somaArray([1, 2, 3, 4, 5])); // Saída: 15