let numeroSecreto = generarNumeroSecreto();

function asigarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asigarTextoElemento('p', 'Acertaste el número'); 
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asigarTextoElemento('p', 'El número secreto es menor');
        } else {
            asigarTextoElemento('p', 'El número secreto es mayor');
        }
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

asigarTextoElemento('h1', 'Juego del número secreto');
asigarTextoElemento('p', 'Indica un número del 1 al 10')