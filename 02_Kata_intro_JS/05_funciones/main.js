
// -----> Estructura de una funcion
// -> funcion sin parametros
// function nombre() {
//     instruciones de mi funcion
// }

// -> funcion con parametros
//  function nombre(x, y){
    // los parametros hacen que mi funcion se ejcute
    // correctamente    
//      instrcciones de la funcion
//  }
// scope global
var nombreG = 'Ricardo'

function saludo(nombre = 'Duki'){
    // scope en la funcion 
    console.log('Hola ' + nombre + ' ,como estas?')
}

saludo('Raul')
saludo('Valentina')
saludo('Andres')
saludo(1)


// console.log(nombreG)
// console.log(nombre)

function suma(x = 0,y = 0, z = 0){
    if(x !== undefined && y !== undefined){
        console.log(x + y)
    }
    if (typeof(x) === 'number'){
        console.log(x + y, 'Es un valor numerico')
    }else if (typeof(x) === 'string'){
        console.log(x, 'es un string')
    }
    console.log(x + y + z)
} 
//   x    y   z   😵
suma(10, 10, 5, 100)
suma(10, 10)
suma('10')



// ----------------------> Objetos literales <------------------------

var persona = {
    nombre: 'Ricardo',
    edad: 23
}

var musica = new Object()

    musica.genero = 'Trap'
    musica.artista = 'Duki'



    console.log(persona)
    console.log(musica)


    //   --->>>> Challenge <<----


    // (parametro) sacar el area de un cuadrado
    // (parametro) sacar el area de un rectangulo
    // (parametro) sacar el area de un triangulo
    // (parametro) edad, y decir si es mayor de edad o no
    // (parametro) un numero, decir si es 0, positvo o negatico
    // (parametro) que diga es es vocal o consonante
