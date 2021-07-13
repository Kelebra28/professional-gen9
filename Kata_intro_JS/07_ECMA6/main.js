
// console.log(titulo)

// var nombre = 'Raul'

// console.log(nombre)

// var nombre = 10
// console.log(nombre)

// nombre = true

// console.log(nombre)

/// -----------> ECAMA 6 <----- 
// let
let numero = 100
// console.log(numero)
   numero = 10000
// console.log(numero)
// const
const gatito = 'Lindo uwu'
// console.log(gatito)

// const gatito = 'XD'
// console.log(gatito)

// spread opetador

const numbers = [10, 30, 50, 'XD', true]
console.log(...numbers)

// const spreadNumber = 10, 30, 50

const name = 'Ricardo'
const saludo = 'Hola'


// string template
console.log(saludo + ' ' + name + ', como estas?')
console.log(`${saludo} ${name}, como estas? tas bien?`)

// arrow fuction

function resta (x, y) {
    console.log(x - y)
}
//  la flechita nos dice que es una fucion
const sumar = (x, y) => {
   // console.log(x + y) // solo muestra los valores
    return x + y
}

console.log(sumar(10, 100))

sumar(10, sumar(5, 5))

console.log(sumar(10, sumar(5, 5)))