const obj = { multiplicador: 2 };

const numeros = [1300, 2129, 3382];

numeros.forEach(function (numero) {
  console.log(numero * this.multiplicador);
}, obj);