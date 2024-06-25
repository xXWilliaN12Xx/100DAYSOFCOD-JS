function boasVindas (nomeUsuario) {
    if (typeof nomeUsuario === 'string') {
        console.log(`Bem vindo, ${nomeUsuario}!`);
    } else {
        console.log(`você não é bem vindo!`);
    }
}

boasVindas('willian');
