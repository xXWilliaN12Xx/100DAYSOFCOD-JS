function contar() {
  // função para contar os numeros
  let ini = document.getElementById("txti"); // variavel que recebe o valor linkado ao HTML
  let fim = document.getElementById("txtf"); // variavel que recebe o valor linkado ao HTML
  let passo = document.getElementById("txtp"); // variavel que recebe o valor linkado ao HTML
  let resultado = document.querySelector("#res"); // variavel que recebe o valor linkado ao HTML

  if (
    // Condição para confirmar os dados recebidos.
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    resultado.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      // Condição para previnir erro.
      alert(`Passo inválido! Considere PASSO 1`);
      p = 1;
    }

    if (i < f) {
      // Condição para a contagem.
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c}`;
      }
    } else {
      // Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c}`;
      }
    }
    resultado.innerHTML += `${c}`; // resultado é avalidado.
  }
}
