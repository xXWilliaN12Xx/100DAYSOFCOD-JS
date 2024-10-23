const numeros = [101, 359, 473, 50];
const maior = numeros.reduce((max, numero) => (numero > max ? numero : max));
console.log(maior); // Saída: 473