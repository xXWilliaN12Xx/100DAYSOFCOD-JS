const numeros = [230, 320, 489];
const produto = numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
console.log(produto); // Saída: 35990400