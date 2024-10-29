const objeto = { nome: "Maria" };
const descritor = Object.getOwnPropertyDescriptor(objeto, "nome");
console.log(descritor);
/*
Saída:
{
  value: 'Maria',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
