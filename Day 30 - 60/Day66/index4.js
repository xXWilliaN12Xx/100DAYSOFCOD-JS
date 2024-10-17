const numeros = [1, 2, 3, 4, 5, 6];

const paresMultiplicados = numeros
  .filter((num) => num % 2 === 0) //Filtra os pares: [2, 4, 6]
  .map((num) => num * 3); // Multiplica por 3: [6, 12, 18]

console.log(paresMultiplicados); // [6, 12, 18]