function asigarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
}

function intentoDeUsuario() {
    alert('Click desde el botón');
}

asigarTextoElemento('h1', 'Juego del número secreto');
asigarTextoElemento('p', 'Indica un número del 1 al 10')