const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((numero) => {
  if (numero === 3) {
    console.log("Número 3 encontrado!");
    // Não é possível parar o loop aqui como no 'for'
  }

  console.log(numero);
});