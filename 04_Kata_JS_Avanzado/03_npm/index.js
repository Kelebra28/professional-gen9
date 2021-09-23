 
const request = require('request')

const pedirPokemon = () => {
    request.get('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body) => {
        // console.log(error)
        // console.log(response)
        // console.log(body)
        if(response.statusCode === 200) {
            const data = JSON.parse(body)
            // console.log(data)
            console.log(data.name)
        } else {
            console.log(`Ocurrio un error: ${error}`)
        }
    })
}

// pedirPokemon()


// 1 crear una funcion que haga una peticion al Poke APi y tome tocomo parametro el numero de un pokemon y que me regrese el nomnbre
// https://pokeapi.co/api/v2/pokemon/200


const pedirPokeParam = (pokemonId) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, (err, res, body) => {
        if (res.statusCode === 200){
            const data = JSON.parse(body)
            console.log(data.name)
        } else if (res.statusCode === 400) {
            console.log(`No existe ningun pokemon con el Id : ${pokemonId}`)
        }else {
            console.log(`Ocurrio un erroe en la peticion: ${err} ` )
        }
    })
 }

//  pedirPokeParam(8000)

const getAuthorbyBookName = (bookName) => {
    const URL_OPEN_LIBRARY = `http://openlibrary.org/search.json?q=${bookName}`
    request.get(URL_OPEN_LIBRARY, (err, res, body) => {
        if(res.statusCode === 200) {
            const data = JSON.parse(body)
            data.docs[0].author_name.forEach( author => {
                    console.log(author)
            })
        }else {
            console.log(`Ocurrio un error : ${err}`)
        }
    })
}

getAuthorbyBookName('i')