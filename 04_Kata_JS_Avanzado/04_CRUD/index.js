const request = require('request')

// API DEVF

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com'

// end-points

// --> /api/v1/authors
// devuleve todos los autores


// -----> CRUD <-----

// CREATE
// READ
// UPDATE
// DELETE



//CREATE
const createAuthor = (name, lastName, nacionality, biography, gender ,age, isAlive) => {
    const URL_POST = `${URL_BASE}/api/v1/authors/`

    const jsonToSend = {
        "name" : name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }
    request.post(URL_POST, {form : jsonToSend}, (err, res, body) => {
        console.log(res.statusCode)
        if(res.statusCode === 201) {
            const newAthor = JSON.parse(body)
            console.log(newAthor)
            return newAthor
        }else {
            console.log(`Ocurrio un error: ${err}`)
        }
    })
}

// createAuthor('Kelebra Rosario 2021x2', 'OLA K ACE', 'MX', 'VATOS LOCOS', 'F', 23, false )


//READ 
// 1443

const readOneAuthor = (idAuthor) => {
    const URL_GET = `${URL_BASE}/api/v1/authors/${idAuthor}`
     request.get(URL_GET, (err, res, body) => {
        if (res.statusCode === 200) {
            const data = JSON.parse(body)
            console.log(data)
            // Soi menso e hice el paso dificil
            // data.filter((author) => {
            //     if (author.id === idAuthor) {
            //         console.log(author)
            //     }
            // })
        }
     })

}
readOneAuthor(14432)

// ---UPDATE
// PUT 



//DELETE
