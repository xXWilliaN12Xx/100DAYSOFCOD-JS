// String, number, undefined, null, boolean, symbol

const nome = "Luiz"; // string.
const nome1 = `Luiz`; // string.
const numero1 = 10; // number.
const numero2 = 10.52; // number.
let nomeAluno; // undefined = não aponta para local nenhum da memória.
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum da memória.
const aprovado = false; // Boolean = True, false (lógico).

let a = 2;
const b = a;
console.log(a, b); // 2, 2.

a = 3;
console.log(a, b); // 3, 2.
