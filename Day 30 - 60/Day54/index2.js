const criaMultiplicador = (multiplicador) => {
    if (typeof multiplicador !== 'number') {
        throw new Error('O multiplicador deve ser um número.');
    }

    return (numero) => {
        if (typeof numero !== 'number') {
            throw new Error('O argumento deve ser um número.');
        }
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));