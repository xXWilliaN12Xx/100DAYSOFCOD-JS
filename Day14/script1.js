let nota;

do {
    nota = prompt('Digite uma nota entre 0 e 10: ');
    nota = parseFloat(nota);

    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert('Nota inválida! por favor, insira um valor entre 0 e 10.');
    }
} while (nota < 0 || nota > 10 || isNaN(nota));

alert(`Nota válida! você inseriu o numero 3${nota}`)