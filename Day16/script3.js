function ordenarArray(arr) {
  // Verifica se o array tem exatamente 2 elementos
  if (arr.length !== 2) {
    return `O array deve conter exatamente 2 números`;
  }

  //Desestrutura os elementos do array
  let [numero1, numero2] = arr;

  // Compara os números e retorna em ordem crescente
  if (numero1 > numero2) {
    return [numero2, numero1];
  } else {
    return [numero1, numero2];
  }
}

// Exemplo:
let array = [5, 3];
let arrayOrdenado = ordenarArray(array);
console.log(arrayOrdenado);
