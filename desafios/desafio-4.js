// Desafíos
/*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];
/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang')
/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function mostrarLenguajes() {
    console.log("Lenguajes de Programación:");
    lenguagesDeProgramacion.forEach(function (lenguaje) {
        console.log(lenguaje);
    });
}

// Llamar a la función para mostrar los lenguajes en la consola
mostrarLenguajes();
// otra forma
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesSeparadamente();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/
function mostrarEnOrdenInverso() {
    console.log("Lenguajes de Programación en orden inverso:");
    // Copiamos la lista y la invertimos
    const reversedList = lenguagesDeProgramacion.slice().reverse();
    // Mostramos los elementos
    reversedList.forEach(function (lenguaje) {
        console.log(lenguaje);
    });
}

// Llamar a la función para mostrar en orden inverso
mostrarEnOrdenInverso();

//otra forma
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesReversoSeparadamente();

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/
function calcularPromedio(lista) {
    if (lista.length === 0) {
        return 0;
    }
    let suma = 0;
    lista.forEach(function (numero) {
        suma += numero;
    });
    return suma / lista.length;
}

// Ejemplo de uso:
const numeros = [5, 10, 15, 20];
console.log("Promedio:", calcularPromedio(numeros)); // Resultado esperado: 12.5
//otra forma
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
function encontrarExtremos(lista) {
    if (lista.length === 0) {
        return;
    }
    let minimo = lista[0];
    let maximo = lista[0];

    lista.forEach(function (numero) {
        if (numero < minimo) {
            minimo = numero;
        }
        if (numero > maximo) {
            maximo = numero;
        }
    });

    console.log("Número más pequeño:", minimo);
    console.log("Número más grande:", maximo);
}

// Ejemplo de uso:
const numeros2 = [8, 3, 12, 5, 1];
encontrarExtremos(numeros2); // Resultado esperado: 1 (mínimo) y 12 (máximo)

//otra forma
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

/*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function calcularSuma(lista) {
    let suma = 0;
    lista.forEach(function (numero) {
        suma += numero;
    });
    return suma;
}

// Ejemplo de uso:
const numeros3 = [2, 4, 6, 8];
console.log("Suma:", calcularSuma(numeros3)); // Resultado esperado: 20
//otra forma
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function encontrarPosicion(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

// Ejemplo de uso:
const numeros4 = [10, 20, 30, 40, 50];
console.log("Posición de 30:", encontrarPosicion(numeros4, 30)); // Resultado esperado: 2 (índice de 30 en la lista)
console.log("Posición de 100:", encontrarPosicion(numeros4, 100)); // Resultado esperado: -1 (100 no está en la lista)

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return [];
    }
    let sumaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        sumaLista.push(lista1[i] + lista2[i]);
    }
    return sumaLista;
}

// Ejemplo de uso:
const listaA = [1, 2, 3];
const listaB = [4, 5, 6];
console.log("Suma de listas:", sumarListas(listaA, listaB)); // Resultado esperado: [5, 7, 9]

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/
function calcularCuadrados(lista) {
    let listaCuadrados = [];
    lista.forEach(function (numero) {
        listaCuadrados.push(numero * numero);
    });
    return listaCuadrados;
}

// Ejemplo de uso:
const numeros5 = [2, 4, 6];
console.log("Cuadrados:", calcularCuadrados(numeros5)); // Resultado esperado: [4, 16, 36]
