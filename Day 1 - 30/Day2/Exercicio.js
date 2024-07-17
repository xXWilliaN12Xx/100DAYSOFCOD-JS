/*
willian rodrigues tem 19 anos, pesa 51 kg tem 1.65 de altura e seu indicie de massa corporal é de 18.73278236914601
*/

const nome = "Willian";
const sobrenome = "rodrigues";
const idade = 19;
const peso = 51;
const altura = 1.65;
let indiceMassaCorporal = peso / (altura * altura);

// template strings

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`
);
