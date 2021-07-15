
// clase padre o superclase
class Mascota {
    constructor(nombre, patas){
        this.nombre = nombre
        this.patas = patas
    }

    comer(){
        return `${this.nombre}, esta comiendo`
    }

}

// clase hija o subclase

// extends es decir que forma parde de 
class Michi extends Mascota {
    constructor (nombre, patas, raza){
        // super -> hace referencia a la clase padre o super clase
        super(nombre, patas)
        this.raza = raza
    }

    ronronear(){
        return `${this.nombre} esta hacinendo: grrrrrrr awa`
    }
}

class LomitoSuabe extends Mascota {
    constructor (nombre, patas, raza){
        // super -> hace referencia a la clase padre o super clase
        super(nombre, patas)
        this.raza = raza
    }

    ammsiedad(){
        return `${this.nombre}: boooooooiggg`
    }
}

const gatitoPerruno = new Michi('Michito uwu', 4, 'persa')
const lomitoAmsioso = new LomitoSuabe('Chemmss', 4, 'perrito panzon y sentado')
console.log(gatitoPerruno)
console.log(gatitoPerruno.comer())
console.log(gatitoPerruno.ronronear())
console.log(gatitoPerruno.nombre)
console.log(gatitoPerruno.patas)


console.log(lomitoAmsioso.nombre)
console.log(lomitoAmsioso.ammsiedad())
console.log(lomitoAmsioso.raza)
console.log(lomitoAmsioso.comer())


