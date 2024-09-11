function criarContaBancaria(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar(valor) {
      saldo += valor;
      console.log(`Depósito de ${valor} realizado. Saldo atual: ${saldo}`);
    },
    sacar(valor) {
      if (valor > saldo) {
        console.log("Saldo insuficiente.");
      } else {
        saldo -= valor;
        console.log(`Saque de ${valor} realizado. Saldo atual: ${saldo}`);
      }
    },
    consultarSaldo() {
      return `Saldo atual: ${saldo}`;
    },
  };
}

const conta = criarContaBancaria(100);
conta.depositar(200); // Depósito de 200 realizado. Saldo atual: 300
conta.sacar(20); //  Saque de 20 realizado. Saldo atual: 280
console.log(conta.consultarSaldo()); // Saldo atual: 280
