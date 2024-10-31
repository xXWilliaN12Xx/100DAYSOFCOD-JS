function Carro(modelo) {
  this.modelo = modelo;
}

Carro.prototype.acelerar = function () {
  console.log(`${this.modelo} está acelerando!`);
};

const meuCarro = new Carro("Fusca");
meuCarro.acelerar(); // Fusca está acelerando!
