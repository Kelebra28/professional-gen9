
class Queue {

    constructor() {
        this.collection = []
    }

    enqueue(item) { // encolar o agregar a la cola
        this.collection.push(item)
        return this.collection.length
    }
    dequeue() { // quitar de la cola -> primer elemento
        return this.collection.shift()
    }

    length() {
        return this.collection.length
    }
    isEmpty () { // verifica si la cola esta vacia
        return this.collection.length === 0
    }

}

const conciertos = new Queue()

console.log(conciertos.enqueue('Bad Bunny'))
console.log(conciertos.enqueue('Duki'))
