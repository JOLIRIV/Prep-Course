// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {if(x > y) {return x;} return y;}

function mayoriaDeEdad(edad) {if(edad >= 18) {return "Allowed";} else {return "Not allowed";}}
  
function conection(status) {if(status === 1){return "Online";} else if(status === 2)
{return "Away";} else {return "Offline"}}

function saludo(idioma) {if(idioma === "aleman"){return "Guten Tag"} else if (idioma === "mandarin") 
{return "Ni Hao!"} else if (idioma="ingles") {return "Hello!"} else {return "Hola!"}}

function colors(color) {
switch(color) {
  case "blue":
    return "This is blue";
  case "red": 
    return "This is red";
  case "green":
    return "This is green";
  case "orange":
    return "This is orange";
  default: 
  return "Color not found";
}}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  switch(numero) {
    case "5" || "10":
      return "true";
    default: 
    return "false";
  }
}
{return numero === 10 || numero === 5}
function estaEnRango(numero) {return (numero<50 && (numero<20))
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
if (numero=Math.floor(numero)){return "true"}} {return numero % 1 === 0}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  switch(numero) {
    case (numero / 3 === 0):
      return "fizz";
    case (numero / 5 === 0):
      return "buzz";
    case (numero / 3 === 0) || (numero / 5 === 0):
      return "fizzbuzz"; 
    default: 
      return (numero);
  }
  {if(numero % 15 === 0) return 'fizzbuzz';
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;}
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if (num1> 0 && num1 > (num2 && num3)) 
{return "Número 1 es mayor y positivo";} if (num1 || num2 || num3 <0) {return "Hay negativos";}
if (num3 > (num1 && num2)) {return (num3 + 1)} if (num1 || num2 || num3 === 0) {return "Error";}}

if(num1 < 0 || num2 < 0 || num3 < 0) {
  return "Hay negativos";
}
else if(num1 === 0 || num2 === 0 || num3 === 0) {
  return "Error";
}
else if(num1 > 0 && num1 > num2 && num1 > num3) {
  return "Número 1 es mayor y positivo";
}
else if(num3 > num1 && num3 > num2) {
  return num3 + 1;
}
else {
  return false;
}

function esPrimo(numero) {var i = 1; var a = numero; if (numero % numero === 0 && numero % i === 0)
  {return "true";} else if {return "false";}}

  function esPrimo(numero)
  {if(numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }}return true;}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor === true){
    return "Soy verdadero"
  }
  return "Soy falso"
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  for (var i=6; i=60; i+6) {return i}
  
var tabla = [6,12,16,24,30,36,42,48,54,60]; console.log (tabla);}

{let arrayTablaDel6 = []
for (let i = 0; i < 11; i++) {
      arrayTablaDel6.push(6 * i)
}
return arrayTablaDel6
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
if (numero.length) === 3 {return true;} else if {return false;} }

{if(numero > 99 && numero < 1000){
  return true
}
return false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 5; do {
    i = i + 5;
  } while (i < 41); return (i)

  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
