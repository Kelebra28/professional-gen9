
const linearSearch = (list, itemToFind ) => {

    const size = list.length
    let index = 0

    while (index < size) {
        let intemPosition = list[index]
        if(intemPosition === itemToFind){
            return index
        }
        index++
    }
    return -1
}

const myList = [1,3,4,63434634,634,63,4,7,20,5]

const result = linearSearch(myList, 63)
console.log(result)

if(result >=0) console.log('Si existe')
if(result === -1) console.log('No existe este elemento')