function* geradora() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora();
for (let valor of g1) {
  console.log(valor);
};