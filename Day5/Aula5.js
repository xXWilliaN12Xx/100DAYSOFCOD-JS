// if (condição) {
// 	True
// } else {
// 	false
// }

let now = new Date(); // variavel now recebe nova data
let hora = now.getHours(); // variavel hora recebe data atural
console.log(`Agora são exatamente ${hora} horas`); // imprime o resultado no terminal em horas.
if (hora < 12) {
  // condição 'se'
  console.log("Good morning"); // imprime o resultado no terminal.
} else if (hora <= 18) {
  console.log("Good afternon"); // imprime o resultado no terminal.
} else {
  // condição 'senão'
  console.log("Good night"); // imprime o resultado no terminal.
}
