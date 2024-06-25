function numeroPrimo (numeroescolhido) {
    if (numeroescolhido <= 1) {
        return false;
    } else if (numeroescolhido === 2) {
        return true;
    } else if (numeroescolhido % 2 === 0) {
        return false;
    }

    const sqrt = Math.sqrt(numeroescolhido);
    for (let i = 3; i <= sqrt; i += 2) {
        if (numeroescolhido % i === 0) return false;
    }

    return true;
}

console.log(numeroPrimo(8));
