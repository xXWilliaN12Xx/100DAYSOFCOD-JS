function tabuada() {
  let num = document.getElementById('txtn');
  let tab = document.getElementById('seltab');

  if (num.value.length == 0) {
    alert("Por favor, insira um número.");
  } else {
    let n = Number(num.value);
    let contador = 1;
    tab.innerHTML = '';
    while (contador <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${contador} = ${n * contador}`;
      item.value = `tab${contador}`;
      tab.appendChild(item);
      contador++;
    }
  }
}
