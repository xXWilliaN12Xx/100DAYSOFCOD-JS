function createCalculator() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
    },

    realizarConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {}
    },
    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
            this.realizarConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = createCalculator();
calculadora.inicia();
