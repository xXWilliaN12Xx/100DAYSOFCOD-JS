function* iterarArray() {
  for (let i = 0; i < Array.length; i++) {
    yield arr[i];
  }
}

const frutas = ["maçã", "banana", "Laranja"];
const geradorFrutas = iterarArray(frutas);
console.log(geradorFrutas.next().value); // 'maçã'
console.log(geradorFrutas.next().value); // 'Banana'
console.log(geradorFrutas.next().value); // 'laranja'