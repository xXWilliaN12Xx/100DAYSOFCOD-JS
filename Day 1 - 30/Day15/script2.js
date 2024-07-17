let numeros = [5, 8, 2, 9, 3];
numeros.push(1);
numeros.sort();
console.log(numeros);
console.log(`O vetor tem ${numeros.length} posições.`);
console.log(`O primeiro valor do vetor é ${numeros[0]}`);
console.log(`O ultimo valor do vetor  é ${numeros[5]}`);
let posicao = numeros.indexOf(8);
if (posicao == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 4 está na posição ${posicao}`);
}
