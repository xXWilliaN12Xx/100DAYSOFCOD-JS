let numero1 = 7;  // Variavel que recebe um valor númerico.
let numero2 = 10; // Variavel que recebe um valor númerico.
let numero3 = 99; // Variavel que recebe um valor númerico.

// Verifica qual número é menor em ordens separadas.

if (numero1 < numero2 && numero2 < numero3) { // verifica se o número indicado é menor que os outros.
  console.log(
    `O número ${numero1} é menor que ${numero2} e o numero ${numero3}!!` // imprime o resultado no terminal.
  );
} else {
  console.log(`O numero ${numero1} não é menor que os demais!!`); // imprime o resultado no terminal.
}

if (numero2 < numero1 && numero2 < numero3) { // verifica se o número indicado é menor que os outros.
  console.log(
    `O número ${numero2} é menor que ${numero1} e o numero ${numero3}` // imprime o resultado no terminal.
  );
} else {
  console.log(`O numero ${numero2} não é menor que os demais!!`); // imprime o resultado no terminal.
}

if (numero3 < numero1 && numero2 < numero1) { // verifica se o número indicado é menor que os outros.
  console.log(
    `O número ${numero3} é menor que ${numero1} e o numero ${numero2}` // imprime o resultado no terminal.
  );
} else {
  console.log(`O numero ${numero3} não é menor que os demais!!`); // imprime o resultado no terminal.
}
