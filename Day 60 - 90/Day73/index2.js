const carro = {marca: 'Toyota'};
const veiculo = {tipo: 'Automóvel'};

Object.setPrototypeOf(carro, veiculo);
console.log(carro.tipo) // Automóvel