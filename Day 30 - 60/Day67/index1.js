const numeros = [100,200,300,400,500];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0 );
console.log(soma); // Saída: 15