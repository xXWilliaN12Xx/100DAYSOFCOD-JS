function saudar(nome) {
  // Função para saudação
  if (typeof nome === "string" && nome.trim()) {
    // condição 'se'
    return "Olá," + nome.trim() + "!"; // retorno da condição caso seja 'true'
  } else {
    // Condição 'senão'
    return "Olá, Mundo!"; // retorno da condição caso seja 'false'
  }
}

console.log(saudar("Alice")); // Deve retornar 'Olá, Alice!'
console.log(saudar("bob")); // Deve retornar 'Olá, bob!'
console.log(saudar("  ")); // Deve retornar 'Olá, Mundo!'
console.log(saudar("")); // Deve retornar 'Olá, Mundo!'
console.log(saudar()); // Deve retornar 'Olá, Mundo!'
console.log(saudar(123)); // Deve retornar 'Olá, Mundo!'
console.log(saudar(null)); // Deve retornar 'Olá, Mundo!'
console.log(saudar(" Charlie ")); // Deve retornar 'Olá, Charlie!'
