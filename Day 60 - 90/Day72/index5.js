function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.som = function () {
  console.log(`${this.tipo} faz um som.`);
};

function Cachorro(nome) {
  this.nome = nome;
  Animal.call(this, "Cachorro");
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  console.log(`${this.nome} está latindo!`);
};

const Rock = new Cachorro("Rock");
Rock.som(); // Cachorro faz um som.
Rock.latir(); // Rock está latindo!
