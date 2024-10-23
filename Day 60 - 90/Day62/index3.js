function* pares() {
  let i = 0;
  while (true) {
    yield i;
    i += 2;
  }
}

const geradorPares = pares();
console.log(geradorPares.next().value); // 0
console.log(geradorPares.next().value); // 2
console.log(geradorPares.next().value); // 4