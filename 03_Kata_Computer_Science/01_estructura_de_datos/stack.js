

class Stack {

    constructor(){
        this.count = 0
        this.storage = {}
    }

    push(nuevoElemento){
        this.count++
        console.log('count', this.count)
        this.storage[this.count] = nuevoElemento

        return this.count
    }

    pop(){
        if( this.count === 0) {
            return null
        }
        const deleteElements = this.storage[this.count];
        delete this.storage[this.count]
        this.count--
        return deleteElements
    }
    // peek regresa el ultimo valor que agregaaste
    peek() { 

    }
    // tamaño de mi pila
    length() {

    }
}

const miPila = new Stack()

console.log(miPila.push('Marco'))
console.log(miPila.push('Yann'))
console.log(miPila.push('Andres'))
console.log(miPila.storage)
console.log(miPila.peek) // -> Andres
console.log(miPila.pop())
console.log(miPila.storage)
console.log(miPila.peek()) // -> yann