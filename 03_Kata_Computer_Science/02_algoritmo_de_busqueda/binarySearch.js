
const binarySearch = (ordenerdList, itemToFind) => {
    let min = 0,
        max = ordenerdList.length -1
        middle = null
        guess = null

    while(min <= max) {
        middle = Math.floor((min + max) / 2)
        guess = ordenerdList[middle]

        if(itemToFind === guess) {
            return middle
        }

        if (itemToFind > guess) {
            min = middle +1
        }
        if (itemToFind < guess) {
            max = middle -1
        }
    }
    return -1
}

const myList = [4, 7, 10 , 11, 55, 59, 63, 67, 80, 82, 87, 90, 99, 100] 

const result = binarySearch(myList, 80)



if(result >= 0) console.log(`Si existe este elemento, en la posicion: ${result}`)
if (result === -1) console.log('Este elemento no existe')