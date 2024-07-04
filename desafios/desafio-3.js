// Desafíos:
/*1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
function imc(peso, altura) {
    return peso / (altura * altura);
}
let indiceMasaMuscular = imc(60, 1.7);
console.log(indiceMasaMuscular);
/*2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
let numero = 5
let resultado = factorial(numero);
console.log(resultado);

/*3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/
function dolarBrasileño(dolar) {
    let cotizacionDolar = 4.80;
    let reales = dolar * cotizacionDolar;
    return reales;
}
let valorEnDolares = 50
let dolarEnReales = dolarBrasileño(valorEnDolares);
console.log(dolarEnReales);
/*4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.*/
function areaPerimetro(altura, anchura) {
    let area = altura * anchura;
    let perimetro = (altura + anchura) * 2;
    return [area, perimetro];
}
resultado = areaPerimetro(3, 3);
console.log(resultado);
/*5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function areaPerimetroCircular(radio) {
    let area = Math.PI * radio * radio;
    let perimetro = 2 * Math.PI * radio;
    return [area, perimetro];
}
resultado= areaPerimetroCircular(3);
console.log(resultado);
/*6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/
function mostrarTablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  numero = 7;
  mostrarTablaDeMultiplicar(numero);
