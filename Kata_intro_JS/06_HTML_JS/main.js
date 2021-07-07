// estructura
// var nombre = document.getElementById('el_id_etiqueta')


var titulo = document.getElementById('titulo')
var parrafo = document.getElementById('parrafo')
var boton = document.getElementById('boton')
var input = document.getElementById('input')
var respuesta = document.getElementById('respuesta')

// var xd = document.getElementsByClassName()

console.log(titulo)
console.log(parrafo)
console.log(boton)

// innerHTML -> pinta en el navegador 



function cambio() {

    var text = input.value
    titulo.innerHTML = 'Soy el titulo cambiado desde JS'
    parrafo.innerHTML = 'Soy el parrafo cambiado desde JS'
    respuesta.innerHTML = text

}

boton.addEventListener('click', cambio)


//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Direccion
// Preguntar Telefono
// Preguntar si quiren pizza con piña o  sin
// respuestas : si -> :( esta bien || no -> Excelente :)  -> caso de error
// -> mostrar las respuestas en una card