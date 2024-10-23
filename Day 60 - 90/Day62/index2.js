function* contador() {
  let i = 0;
  while (i < 5) {
    yield i++;
  }
}

const contagem = contador();
console.log(contagem.next().value); // 0
console.log(contagem.next().value); // 1
console.log(contagem.next().value); // 2
console.log(contagem.next().value); // 3
console.log(contagem.next().value); // 4