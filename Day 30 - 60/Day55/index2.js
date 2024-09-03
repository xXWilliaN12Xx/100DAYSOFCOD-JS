function criarContador() {
    let contador = 0; // Variável local que a função interna pode acessar

    return function() {
        contador++ // Incrementa a variável "contador"
        console.log(contador); // Exibe o valor atualizado de "contador"
    };
};

const contador1 = criarContador(); // Cria uma nova "closure"
contador1(); // Saída: 1
contador1(); // Saída: 2

const contador2 = criarContador(); // Cria outra "closure"
contador2(); // Saída: 1
contador2(); // Saída: 2