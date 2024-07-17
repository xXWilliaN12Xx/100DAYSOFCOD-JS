// Operadores Relacionais:

// >	Operador de maior
// <	Operador de menor
// >=	Operador de maior ou igual
// <=	Operador de menor ou igual
// ==	Operador de igual
// !=	operador de não igual
// ===	Operador de igualdade restrita

// Operadores lógicos

// !	Negação
// &&	Conjunção
// ||	Disjunção

let idade = 20;
let estado = "RJ";
let salario = 2000;
sexo = "F";

let resultado = idade >= 15 && idade <= 17; // a idade está entre 15 e 17?
let resultado2 = estado == "RJ" || estado == "SP"; // o estado é RJ ou SP?
let resultado3 = salario > 1500 && sexo != "M"; // o salário é acima de 1500 e não é homem?

console.log(resultado); // imprime o resultado no terminal: false
console.log(resultado2); // imprime o resultado no terminal: true
console.log(resultado3); // imprime o resultado no terminal: true
