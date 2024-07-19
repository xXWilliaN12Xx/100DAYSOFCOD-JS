const pessoa = {
  nome: "willian", // Propriedade 'nome' com o valor 'willian'
  sobrenome: "Rodrigues", // Propriedade 'sobrenome' com o valor 'Rodrigues'
  idade: 19, // Propriedade 'idade' com o valor 19
};

// Loop for...in
for (let chave in pessoa) {
  // Itera sobre as chaves (propriedades) do objeto 'pessoa'
  console.log(chave, pessoa[chave]); // Imprime a chave e o valor correspondente dessa chave no objeto 'pessoa'
}