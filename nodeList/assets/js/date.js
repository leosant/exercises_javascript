function mostrarHora() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => console.log(mostrarHora()), 1000);

setTimeout(() => clearInterval(timer), 10000);

//setTimeout(() => console.log('Olá mundo'), 10000);