// estructura
// var nombre = document.getElementById('el_id_etiqueta')


var titulo = document.getElementById('titulo')
var parrafo = document.getElementById('parrafo')
var boton = document.getElementById('boton')
var input = document.getElementById('input')
var respuesta = document.getElementById('respuesta')
var card = document.getElementById('card')
var pizzaImg = document.getElementById('pizza_img')
var mostrar = true
// var xd = document.getElementsByClassName()

// console.log(titulo)
// console.log(parrafo)
// console.log(boton)

// innerHTML -> pinta en el navegador 

// .classList -> me enseña las clases que tiene mi etiquta
console.log(card.classList)
// add -> agrega una clase
// remove -> elimina una clase

function cambio() {

    var text = input.value
    titulo.innerHTML = 'Soy el titulo cambiado desde JS'
    parrafo.innerHTML = 'Soy el parrafo cambiado desde JS'
    respuesta.innerHTML = text
    if( mostrar === true){
        card.classList.remove('none')
        mostrar = false
    }else if (mostrar === false) {
          card.classList.add('none')
          mostrar = true
    }
  
    pizzaImg.src = 'https://c8.alamy.com/compes/amgr7n/mexico-ciudad-de-mexico-dominos-pizza-amgr7n.jpg'

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