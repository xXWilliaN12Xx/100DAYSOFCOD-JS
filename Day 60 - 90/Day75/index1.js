function validadorCPF(cpfEnviado) {
  Object.defineProperty(this, "cleanCpf", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

validadorCPF.prototype.validador = function () {
  if (typeof this.cleanCpf === "undefined") return false;
  if (this.cleanCpf.length !== 11) return false;
  if (this.isSquencia()) return false;

  const cpfParcial = this.cleanCpf.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cleanCpf;
};

validadorCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

validadorCPF.prototype.isSquencia = function () {
  const sequencia = this.cleanCpf[0].repeat(this.cleanCpf.length);
  return sequencia === this.cleanCpf;
};

const cpf = new validadorCPF("705.484.450-52");
console.log(cpf.validador());
