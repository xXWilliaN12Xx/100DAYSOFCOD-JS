function Veiculo(tipo, velocidadeMaxima) {
  this.tipo = tipo;
  this.velocidadeMaxima = velocidadeMaxima;
  this.velocidadeAtual = 0;
}

Veiculo.prototype.acelerar = function (incremento) {
  this.velocidadeAtual += incremento;
  if (this.velocidadeAtual > this.velocidadeMaxima) {
    this.velocidadeAtual = this.velocidadeMaxima;
    console.log(
      `${this.tipo} atingiu a velocidade máxima de ${this.velocidadeMaxima} km/h`
    );
  } else {
    console.log(`${this.tipo} acelerou para ${this.velocidadeAtual} km/h`);
  }
};

function Carro(marca, modelo) {
  Veiculo.call(this, "Carro", 200);
  this.marca = marca;
  this.modelo = modelo;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.tocarBuzina = function () {
  console.log(`${this.marca} ${this.modelo} está buzinando: BEEP BEEP!`);
};

function Moto(marca, cilindrada) {
  Veiculo.call(this, "Moto", 180);
  this.marca = marca;
  this.cilindrada = cilindrada;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.empinar = function () {
  if (this.velocidadeAtual > 0) {
    console.log(`${this.marca} de ${this.cilindrada} cc está empinando!`);
  } else {
    console.log(`A ${this.marca} precisa estar em movimento para empinar!`);
  }
};

const carro1 = new Carro("Toyota", "Corolla");
const moto1 = new Moto("Honda", 250);

console.log("--- Carro ---");
carro1.acelerar(50); // Carro acelerou para 50 km/h
carro1.acelerar(160); // Carro atingiu a velocidade máxima de 200 km/h
carro1.tocarBuzina(); // Toyota Corolla está buzinando: BEEP BEEP!

console.log("--- Moto ---");
moto1.acelerar(70); // Moto acelerou para 70 km/h
moto1.empinar(); // Honda de 250 cc está empinando!
