function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.som = function () {
  console.log(`${this.tipo} faz um som.`);
};

function Gato(nome) {
  Animal.call(this, "gato");
  this.nome = nome;
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.miar = function () {
  console.log(`${this.nome} está miando!`);
};

const gato1 = new Gato("Garfield");
gato1.som(); // Gato faz um som.
gato1.miar(); // Garfield está miando!
