// alert('Descarga ya!')

// ------------> Estructura <----------------

// if (condicion) {
//     el codigo a ejecutar si el resultado
//     de mi condicion es verdadero (true)
// } else {
//     el codigo a ejecutar si el resultado 
//     de mi condicion es falso (false)
// }

// ---------> Operadores relacionales <----------

//  <   --> menor que  
//  <=   --> menor igual 
//   >   --> mayor que
//   >=  --> mayor igual 
//  🚫  ==   --> comparar 🚫
//   ===  --> comprar indeticamente 
//   !==  --> diferente de 

var numero = 12

// if ( numero !== '10') {
//     console.log('Es verdadero')
// } else  {
//     console.log('Es falso')
// }

//   Modulo -> %  -> residuo de la division 

// if (numero === 10) {
//     console.log('Es identico a 10')
// }else if (numero === 11) {
//     console.log('Es identico a 11')
// }else {
//     console.log('No es ni 10 ni 11')
// }


// --------- Challenge 1 -----------

// van a preguntar al usuario un numero y van a poner en la consola
// el numero y si es par o impar
// 1: impar
// 2: par
// Que pasa si el usuario pone letra x error 


// var askNumber = prompt('Ingresa un numero para saber si es par o inpar')

// // --> saber el tipo de dato --> typeof()
// // console.log(typeof(askNumber))

// // --> pasar el texto a tipo numerico
// var valueNumber = Number(askNumber)

// if (valueNumber % 2 === 0) {
//     console.log('El numero: ' + valueNumber + ' es par')
// } else if (valueNumber % 2 === 1) {
//     console.log('El numero: ' + valueNumber + ' es inpar')
// }else {
//     console.error('No es numero, intentalo de nuevo')
// }



// --------------> Operadores Logicos <--------------

//   &&  --> and 
//   ||  --> or 


// Si puedes conducir
// es menor de edad -> no puede conducir
// si 16 y 17  -> permiso para conducir
// si eres mayor de 18 puedes conducir 
// si si eres mayor de 90  --> ya no puedes conducir

var askAge = prompt('Cual es tu edad')
var valueAge = Number(askAge)

if (valueAge >= 18 && valueAge <= 90) {
    console.log('Puedes conducir 🤓')
} else if (valueAge === 16 || valueAge === 17) {
    console.log('Puedes sacar tu permiso para conducir 😎')
} else if (valueAge <= 15 || valueAge > 90 ) {
    console.warn('No puedes conducir 😞')
}else {
    console.error('No es una edad valida, intentalo de nuevo 🤬')
}


//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano y porque
