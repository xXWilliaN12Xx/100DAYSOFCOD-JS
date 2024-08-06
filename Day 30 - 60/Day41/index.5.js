// Escreva uma função que receba um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Cheque se o número é realmente um número = Retorne o próprio número
// use a função com número de 0 a 100

let funcFizzBuzz = (numero) => {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, funcFizzBuzz(i));
}
