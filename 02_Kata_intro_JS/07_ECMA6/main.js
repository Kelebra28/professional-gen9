
// console.log(titulo)

// var nombre = 'Raul'

// console.log(nombre)

// var nombre = 10
// console.log(nombre)

// nombre = true

// console.log(nombre)

/// -----------> ECAMA 6 <----- 
// let
let numero = 100
// console.log(numero)
   numero = 10000
// console.log(numero)
// const
const gatito = 'Lindo uwu'
// console.log(gatito)

// const gatito = 'XD'
// console.log(gatito)

// spread opetador

const numbers = [10, 30, 50, 'XD', true]
// console.log(...numbers)

// const spreadNumber = 10, 30, 50

const name = 'Ricardo'
const saludo = 'Hola'


// // string template
// console.log(saludo + ' ' + name + ', como estas?')
// console.log(`${saludo} ${name}, como estas? tas bien?`)

// arrow fuction

function resta (x, y) {
    console.log(x - y)
}
//  la flechita nos dice que es una fucion
const sumar = (x, y) => {
   // console.log(x + y) // solo muestra los valores
    return x + y
}

// console.log(sumar(10, 100))

// sumar(10, sumar(5, 5))

// console.log(sumar(10, sumar(5, 5)))

/// ---------->> Challenge <----------------


const palindormo = () => {
    let oracion = prompt('Ingresa una frase').toLowerCase()
    let text = oracion.split('').reverse().join('').replaceAll(' ', '')
    let withOutSpace = oracion.replaceAll(' ', '')
    if( withOutSpace === text) {
        return true
    }else {
        return false
    }
                              // entonce  sino     
    // return text === withOutSpace ? true : false
    // console.log(oracion)
    // console.log(text)
}
// console.log(palindormo())


let countries = ["Mexico", "Panama", "Guatemala", "El Salvador", "Estados Unidos de America", "Estados Unidos de America"]
const longestCountry = () => {
    let theLongest = countries[0].replaceAll(' ', '');
    let theBest = []

    for (let country of countries) {
        let valueCountry = country.replaceAll(' ', '')
        // console.log(valueCountry, 'Primeo paso')
        // console.log(valueCountry)
        // console.log(valueCountry, valueCountry.length)
        if (valueCountry.length > theLongest.length) {
            // console.log(valueCountry)
             theBest.push(valueCountry)
        } else {
            theLongest = theLongest
        }
    }
    return theBest
}


const longestCountry2 = () => {
    // .map es un ciclo for que recorre el arreglo
    let inNumber = countries.map(country => {
        // console.log(country)
        let valueCountry = country.replaceAll(' ', '')
        return valueCountry.length
    })
    // console.log(...inNumber)
    // metodo Math.max se usa para saber el valor maximo 
    let max = Math.max(...inNumber)
    // console.log(max)
    // filter  me va a regresar el pais con mayor longitud
    let nameLarger = countries.filter(country => {
        let valueCountry = country.replaceAll(' ', '')
        // si la longuitud coicide con el maximo regresa el nombre
        if ( valueCountry.length === max){
            return valueCountry
        }
        
    })
    // console.log(nameLarger)
    return nameLarger
}

// console.log(longestCountry(),'Samara')
// console.log(longestCountry2(),'Martin')

const farenheitToCelsius = (fahrenheit) => {

    let valueF = Number(fahrenheit)
    let celsius = (valueF -32 )* 5 / 9

   return `${valueF} grados Farenheit valen: ${celsius} grados celsius`
}

// console.log(farenheitToCelsius(190))

const numberParams = (...params) => {
    return `Recibi ${params.length} parametros`
}

// console.log(numberParams(10, 10, 'cd', 'xd', 'uwu', 'awa'))
