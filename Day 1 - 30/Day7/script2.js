let numero1 = 150;
let numero2 = 101;
let numero3 = 99;

// Função para verificar qual número é o menor
function verificarMenorNumero(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(`O número ${num1} é menor que ${num2} e ${num3}!!`);
    } else if (num2 < num1 && num2 < num3) {
        console.log(`O número ${num2} é menor que ${num1} e ${num3}!!`);
    } else if (num3 < num1 && num3 < num2) {
        console.log(`O número ${num3} é menor que ${num1} e ${num2}!!`);
    } else {
        console.log('Nenhum número é estritamente menor que os outros dois.');
    }
}

verificarMenorNumero(numero1, numero2, numero3);
