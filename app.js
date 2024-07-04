let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
function asigarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asigarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asigarTextoElemento('p', 'El número secreto es menor');
        } else {
            asigarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

asigarTextoElemento('h1', 'Juego del número secreto');
asigarTextoElemento('p', 'Indica un número del 1 al 10')