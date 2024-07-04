let numeroSecreto = 0;
let intentos = 0;
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
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asigarTextoElemento('p', 'El número secreto es menor');
        } else {
            asigarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

function condicionesIniciales() {
    asigarTextoElemento('h1', 'Juego del número secreto');
    asigarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Dehabilitar el boto de nuevo juego
    //document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();