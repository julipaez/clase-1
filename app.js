// // let apellido = 'Paez';
// // const DNI = 10000000;

// // apellido='aguilera'
// // apellido=7

// // DNI = 5

// let numeroA = 1;
// let numeroB = 2;
// const numeroC=3;

// let resultadoSuma = numeroA + numeroB

// //SUMA DE TEXTO

// //let nombre = 'Juli'
// let apodo = 'Ju'

//  //let cadenaDeTexto = nombre + apodo

// //SUMA DE STRING Y NUMBER queda como string

// let numero5 = 5
// let texto = 'hola'

// let resultado = numero5 + texto 

// CONSOLE - ingresamos un parámetro y muestra el resultado

// console.log (resultado)
// console.log(5);
// console.log('Hola Mundo');

// //PROMPT - se le pasa información que el usuario necesita ver, pedimos info al user - SIEMPRE DEVUELVE STRING 

// let nombre = prompt ("ingresa tu nombre")

// console.log (nombre);

// NUMERO COMO NUMBER Y COMO STRING (CADENA DE TEXTO) 666 >>> "666"

//ALERT -- VENTANA QUE NOS MUESTRA INFO - no hace falt hacer console log -- es solo informativo

// alert (5)"
// alert ('"soy un alert"')

// Hacer un algoritmo donde el usuario ingrese un dato - EJEMPLO
//prompt devuelve un string edad e ingreso mensual son number, se cambia a number usando parseInt  "10" < 10 redondea, para enteros, FLOAT para dejar decimal

// let edad = parseInt (prompt ("Ingrese su edad")) 
// let ingresoMensual = parseInt (prompt ("Por favor, ingresa tu ingreso mensual"))

// console.log(edad);

// alert("¡Felicitaciones! Tu edad, " + edad + ", " + "cumple con la edad mínima para solicitar el producto")

const anioDeNacimiento = parseInt(prompt ("¿En qué año naciste?"))
let anioActual = parseInt(prompt("Por favor, ingrese el año actual"))

let edad = anioActual - anioDeNacimiento
console.log(edad)

alert('Tu edad es: ' + edad)
