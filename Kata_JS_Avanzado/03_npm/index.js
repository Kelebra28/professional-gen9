
// console.log('----Todo en la pila de ejecucion-----')
// console.log(1)
// console.log(2)
// console.log(3)


// console.log('-----El 2 y el 3 van a la cola de ejecucion-----')
// console.log(1)
// // callback -> funcion como parametro
// setTimeout(() => {
//     return console.log(2)
// }, 3000)

// setTimeout(() => {
//     return console.log(3)
// }, 2000)

// console.log(4)


// console.log('------ Simulacion de cuello de botella ---------')
// console.log(1)
// setTimeout(() => {
//     return console.log(2)
// }, 2000)

// for(let i = 0; i <= 1000000000; i++) {
//     console.log(i, 'xd')
// }

// console.log(3)


// ----------------- Ejercicios ------------
// ----1
const saludo = (imprimir, mensaje) => {
    imprimir(mensaje)
}
// primero parametro es una funcion -> callback
// saludo((mensaje) => {
//     console.log(mensaje)
// } ,'Hola desde un callback') // el segundo parametro es el mensaje

// ----2

const valor = (queTipo, variable) => {
    queTipo(variable)
}

// valor((variable) => {
//     console.log(typeof(variable))
// }, 1)

// -----3

const imprimirOperacion = (operacion, x, y) => {
    operacion(x, y)
}
// suma
// imprimirOperacion((x, y) => {
//     console.log(x + y)
// }, 10, 50)
// // resta
// imprimirOperacion((x, y) => {
//         console.log(x - y)
// }, 50, 10)
// // multiplicacion
// imprimirOperacion((x, y) => {
//     console.log(x * y)
// }, 10, 10)
// // division
// imprimirOperacion((x, y) => {
//     console.log( x / y)
// }, 100, 20)

// ----4

const caracteres = (convertir, texto, caso) => {
    convertir(texto, caso)
}

// caracteres((texto, caso) => {
//     if(caso === 'minus'){
//         console.log(texto.toLowerCase())
//     } else if ( caso === 'mayus') {
//         console.log(texto.toUpperCase())
//     }else {
//         console.log('No es un caso valido')
//     } // texto    caso
// }, 'Ricardo XD', 'mayus')


// -----5

const devolverHora = (convertir, tiempos) => {
    convertir(tiempos)
}

devolverHora((tiempos) => {
    // map -> for
    //   tiempo es cada elemento del arreglo
    tiempos.map((tiempo) => {
        if( tiempo / 60 >= 2){
            console.log(tiempo)
        }
    })
}, [120, 80, 200, 100])
console.log('Hola nodemon xd')