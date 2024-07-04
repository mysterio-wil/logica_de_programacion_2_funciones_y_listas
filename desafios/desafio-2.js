//Desafíos:

// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log("¡Hola, mundo!")
}
saludo() //Invocamos la función saludo() para que se ejecute y muest

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre){
    console.log("¡Hola, " + nombre + "!");
    }
    saludoNombre("Wilmer");

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
    return numero * 2;
}
let resultadoDoble = doble(5);
console.log(resultadoDoble);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(a,b,c){
    return (a+b+c)/3;
}
let resultadoPromedio = promedio(5,6,7);
console.log(resultadoPromedio);

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(a,b){
    if(a>b){
        return a;
    } else{
        return b;
    }
}
let resultadoMayor = mayor(5,6);
console.log(resultadoMayor);

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicar(numero){
    return numero * numero;
}
let resultadoMultiplicar = multiplicar(5);
console.log(resultadoMultiplicar);
