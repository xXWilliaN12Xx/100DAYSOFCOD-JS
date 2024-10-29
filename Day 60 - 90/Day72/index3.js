const original = {a: 1};
const juncao = {b: 2, c: 3};
const resultado = Object.assign(original, juncao)
console.log(resultado)
// { a: 1, b: 2, c: 3 }