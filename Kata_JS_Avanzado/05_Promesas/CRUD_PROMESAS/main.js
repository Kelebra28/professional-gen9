const request = require('request')

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com'

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

    return new Promise((resolve, reject) => {
        request.post(URL_POST, {form : jsonToSend}, (err, res, body) => {
            if( res.statusCode === 201) {
                const newAuthor = JSON.parse(body)
                resolve(newAuthor)
            } else {
                console.log(err)
                reject(new Error("No se pudo crear el usuario"))
            } 
        })
    })

}
// Ejecutamos crear usuario 14488
// createAuthor('Kelebra Rosario Proemsa', 'OLA K ACE', 'MX', 'VATOS LOCOS', 'F', 23, false)
//     .then( newAuthor => {
//         console.log('Autor creado', newAuthor)
//     })
//     .catch( error => console.log(error))
//     .finally(() => console.log('Se acabo la promesa'))

const updateAuthor = (id, name, lastName, nacionality, biography, gender ,age, isAlive) => {
    const URL_PUT = `${URL_BASE}/api/v1/authors/${id}/`

    const jsonToSend = {
        "name" : name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }

    return new Promise((resolve, reject) => {
        return request.put(URL_PUT, {form: jsonToSend}, (err, res, body) => {
            if (res.statusCode === 200) {
                const updateAuthor = JSON.parse(body)
                resolve(updateAuthor)
            }else {
                reject(new Error(`No se pudo actualizar el usuario: ${id}` ))
            }
        })
    })
}

// updateAuthor(14488, 'Kelebra x1', 'Generiacon 9x2', 'MX', 'VATOS LOCOS', 'F', 23, false)
//     .then((updateAuthor)=> {
//         console.log('Author updated', updateAuthor)
//     })
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Se acabo la promosesa'))


createAuthor('Juancho x2', 'Generiacon 9999', 'MX', 'VATOS LOCOS 4Evar', 'F', 30, true)
    .then((newAuthor) => {
        console.log('Autor creado', newAuthor)
        return updateAuthor(newAuthor.id,'Juancho', 'Generiacon 9999', 'MX', 'VATOS LOCOS 4Evar', 'F', 30, false)
    })
    .then((updateAuthor) => {
        console.log('Autor Actualizado:', updateAuthor)
    })