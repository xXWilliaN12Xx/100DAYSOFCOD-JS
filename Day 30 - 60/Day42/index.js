function soma(x, y) {
  // Verifica se os parâmetros 'x' e 'y' são do tipo número
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números."); // Lança um erro se algum dos parâmetros não for número
  }

  // Retorna a soma dos dois números
  return x + y;
}

try {
  console.log(soma(1, 3)); // Exibe o resultado da soma de 1 e 3
  console.log(soma("1", 3)); // Tenta somar uma string com um número, o que causará um erro
} catch (error) {
  console.error("Erro:", error.message); // Captura e exibe a mensagem de erro, se ocorrer
  console.log("Este é o erro."); // Mensagem adicional para indicar que houve um erro
};