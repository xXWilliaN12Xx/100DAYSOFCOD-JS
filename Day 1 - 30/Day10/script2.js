function Adicaoporcento (valor, porcentagem) {
    let incremento = (valor * porcentagem) / 100;

    let resultado = valor + incremento;
    return resultado;
}

console.log(Adicaoporcento(100, 68));