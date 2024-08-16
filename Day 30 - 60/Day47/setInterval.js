function showTime () {
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(showTime());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 4000);

setTimeout(function (err) {
    if (err) throw err;
    clearInterval(timer);
    console.log('Dia 44 concluído!')
}, 5000)