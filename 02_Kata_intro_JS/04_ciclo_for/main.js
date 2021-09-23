
//   -->>> Estructura
// for (inicio; limite; secuencia) {
//     bloque de codigo que se ejecuta
//     hasta que el ciclo acabe
// }
// console.log(1)
// console.log(2)
// console.log(3)
// ...
// console.log(10)

var personas = [
    {
        nombre: 'Jose',
        xd: 'xd'
    },
    {
        nombre: 'Samara',
        xd: 'xd'
    }
]


for (var i = 0; i <= 10; i = i + 1){
    // console.log(i)
}

for (var x = 1; x <= 5; x++ ) {
    // console.log(x)
} 

// 100 -> 0 de 1 en 1
// 0 -> 500  de 50 en 50
// 100 -> -100 de 10 en 10 




var personas = [
    {
        nombre: 'Jose',
        xd: 'xd'
    },
    {
        nombre: 'Samara',
        xd: 'xd'
    },
    {
        nombre: 'Yann',
        xd: 'xd'
    },
    {
        nombre: 'Valentina',
        xd: 'xd'
    },
    {
        nombre: 'Emilio',
        xd: 'xd'
    },
    {
        nombre: 'Diego',
        xd: 'xd'
    }
]
// recorrer un arreglo
// .length
// console.log(personas)
console.log(personas.length)
// console.log(personas[1])
// console.log(personas[2])
//                          6
for (var y = 0; y < personas.length; y++ ) {
    console.log(personas[y].nombre)
}



// van a recorrer los numeros de 1 - 100
// y van a decir si son pares o nones: 
// ejemplo: 
//  0: par
// 1: inpar
// 2: par
// ...
// 100: par

// ------> Fizz Buzz <------
//  recorrer de 1 -> 100
// si el numero es divisible entre 3 --> numero + 'fizz'
// si el numero es divisible entre 5  --> numero + 'buzz'
// si el numero es divisible entre 3 y 5  --> numero + 'fizzbuzz'

// 1
// 2
// 3 fizz
// 4
// 5 buzz
// ...
// 15 fizzbuzz


// 🚫No se hace🚫
// 15 fizz
// 15 buzz
// 15 fizzbuzz