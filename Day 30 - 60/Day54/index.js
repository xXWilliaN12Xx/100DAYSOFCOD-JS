function conta(operador, acumulador, ...numeros) {
    if (!['+', '-', '*', '/'].includes(operador)) {
        console.error('Operador inválido. Use um dos seguintes: + | - | * | /');
        return;
    }

    for (let numero of numeros) {
        switch (operador) {
            case '+':
                acumulador += numero;
                break;
            case '-':
                acumulador -= numero;
                break;
            case '/':
                acumulador /= numero;
                break;
            case '*':
                acumulador *= numero;
                break;
        }
    }

    console.log(acumulador);
}

conta('/', 1, 20, 30, 40, 50);