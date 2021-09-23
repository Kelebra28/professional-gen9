


const insertion = (list) => {
    let size = list.length

    for(let i = 1; i < size; i++) {
        let temp = list[i] // temporal
        let aux = i - 1 // auxiliar

        while (aux >= 0 && temp < list[aux]) {
            list[aux + 1] = list[aux]
            aux --
        }
        list[aux + 1] = temp
    }
}

const list = [6, 3, 5, 1, 7, 8, 2]

console.log(`Es el arreglo sin ordenar ${list}`)
insertion(list)
console.log(`Este es el arreglo ordenado ${list}`)