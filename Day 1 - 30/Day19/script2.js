let primeiroNumero = 123;
let segundoNumero = 432;

let verificar =
  primeiroNumero > segundoNumero
    ? "Primeiro Número Maior"
    : "Segundo Número Maior";

console.log(verificar);

console.log("----------------------------------------");

let nome = "Gomes",
  idade = 32;

idade > 18
  ? (console.log(`Ok, você pode entrar na festa.`),
    console.log(`${nome} entrou`))
  : (console.log("Desculpe, você não pode entrar na festa!"),
    console.log(`${nome} não entrou!`));
