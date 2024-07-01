let nome = 'willian'
let senha = 123

do {
    nome = prompt('Qual seu nome: ');
    senha = prompt('Digite sua senha: ');

    if (nome != 'willian' && senha != 123) {
        alert('Usuario inválido! tente novamente.');
    }
} while (nome != 'willian' && senha != 123);

alert(`Usuário correto. seja bem vindo ${nome}`)