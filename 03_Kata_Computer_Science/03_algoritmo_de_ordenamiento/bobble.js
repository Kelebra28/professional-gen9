


const bobble = (list) => {
    let aux = 0
    let size = list.length

    for(let i = 1; i < size; i ++) {
        for(let x = 0; x < (size - i); x++) {
            if(list[x] > list[x+1]){
                aux = list[x]
                list[x] = list[x+1]
                list[x +1] = aux
            }
        }
    }
    return list
}

const list = [6, 3, 5, 1, 7, 8, 2]
console.log(`Es el arreglo sin ordenar ${list}`)
console.log(`Este es el arreglo ordenado ${bobble(list)}`)
