// Função para as operações

function operacoesAritmeticas(numero1, numero2) {
  const soma = numero1 + numero2; // Variavel para somar dois números.
  const multiplicacao = numero1 * numero2; // Variavel para multiplicar dois números.
  const subtracao = numero1 - numero2; // Variavel para subtrair dois números.
  const divisao = numero1 / numero2; // variavel para dividir dois números.
  const potenciacao = numero1 ** numero2; // Variavel para potenciação de dois números.

  return {
    // Retorna os valores criados a cima.
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
    potenciacao: potenciacao,
  };
}

const numero1 = 10; // Variavel com valor Inteiro.
const numero2 = 5; // Variavel com valor Inteiro.
const resultados = operacoesAritmeticas(numero1, numero2); // Variavel que recebe o resultado da função criada.
console.log(resultados); // Apresentação no Terminal.
