let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asigarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function intentoDeUsuario() {
    alert('Click desde el botón');
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

asigarTextoElemento('h1', 'Juego del número secreto');
asigarTextoElemento('p', 'Indica un número del 1 al 10')