//             0123...
const nome = ["willian", "Rodrigues", "gomes"]; // Declara um array chamado "nome" com três strings

// Loop for tradicional
for (let i = 0; i < nome.length; i++) {
  // Itera sobre o array usando um índice, de 0 até o comprimento do array menos 1
  console.log(nome[i]); // Imprime o valor na posição atual do índice
}

console.log("------------"); // Imprime uma linha separadora

// Loop for...in
for (let i in nome) {
  // Itera sobre as chaves (índices) do array "nome"
  console.log(nome[i]); // Imprime o valor na posição atual do índice
}

console.log("------------"); // Imprime uma linha separadora

// Loop for...of
for (let value of nome) {
  // Itera sobre os valores do array "nome"
  console.log(value); // Imprime o valor atual
}

console.log("------------"); // Imprime uma linha separadora

// Método forEach
nome.forEach(function (valor, indice) {
  // Aplica a função a cada elemento do array "nome"
  console.log(valor, indice); // Imprime o valor atual e o índice correspondente
});
