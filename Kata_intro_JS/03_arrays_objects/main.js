// Array o arreglo 
var arreglo = [12, 10, 5, 'hola', 10, 'Ricardo', true]
// console.log(arreglo)
//             0         1         2        3
var fruta = ['manzas', 'fresa', 'sandia', 'platano']
// console.log(fruta[2])
fruta[4] = 'guayaba' // se sustituye por el push

// =--------- Metodos --------
// .push() -> agrega un elemento al final de mi objeto
fruta.push('magos')
fruta.push('pera')
// console.log(fruta)

// .pop() ---> elminar el ultimo elemento de mi arreglo
fruta.pop()
fruta.pop()

// console.log(fruta)

var animales = [
    // 0             1        3
    ['hipopotamo', 'leon', 'jirafa'], // 0
    //  0        1
     ['perro', 'gato'], // 1
     {
         perro: { // 2
             raza: 'special <3'
         }
     }
]

// console.log(animales[1][0])
// console.log(animales[0][0])
console.log(animales[2].perro.raza)

// ------> objetos o objects <---------

var persona = {
    nombre: 'Ricardo',
    edad:  23,
    cel: '+52 551231231231',
    musica : {
        regeton: [ 'BB', ' Plan b', 'NJ'],
        trap: {
            mexicano: ['aleman', 'santa klan'],
            usa: ['drake', 'lil peep'],
            argetino: ['duki', 'ecko', 'frijo'],
        },
    },
    pelicilas: ['DER', 'FR', 'FR2', 'RF2'] 
}

console.log(persona.edad)
console.log(persona.musica.trap.argetino[0])