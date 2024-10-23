const numeros = [1, 2, 3, 3, 4, 4, 5];
const unicos = numeros.reduce((acumulador, valorInicial) => {
  if (!acumulador.includes(valorInicial)) {
    acumulador.push(valorInicial);
  }
  return acumulador;
}, []);

console.log(unicos); // Saída: [ 1, 2, 3, 4, 5 ]