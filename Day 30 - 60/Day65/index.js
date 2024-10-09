// Retorne os numeros maiores que 10
//               0  1   2   3  4.....
const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10;
});

console.log(numerosFiltrados);