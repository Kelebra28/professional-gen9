
class Animal {

    // atributos que tinen mi clase
    constructor(tipo, numPatas, name){
    //Animal.tipo = tipo
        this.tipo = tipo
        this.numPatas = numPatas
        this.name = name
    }

    // metodos -> funciones que hacen mi clase
    comer(alimentacion){
        return `Los animales de tipo ${this.tipo} se alimentan de ${alimentacion}`
    }

    acction(accion){
        return `El ${this.tipo} en este momento esta  ${accion}`
    }
}

const gato = new Animal('Felino', 4)
const coco = new Animal('Reptil', 4)
const spider = new Animal('Aracnidos', 8)

console.log(gato)
console.log(coco)
console.log(spider)
console.log(gato.comer('ratones'))
console.log(coco.comer('carne'))
console.log(coco.acction('lavar los trastes'))
console.log(gato.acction('acotado en mi teclado'))



// console.log('xd')
// document.getElementById('id')
// Math.floor()




// Programacion Orientada a Objetocs
// 4 pilares de la POO
//  1) Abtraccion
//  2) Encapsulamiento
//  3) Herencia *
//  4) Polimorfismo *