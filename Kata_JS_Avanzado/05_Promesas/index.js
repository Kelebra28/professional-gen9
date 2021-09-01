
const edad = 17

const promesa = new Promise ((resolve, reject) => {
    if(edad >= 18) {
        resolve('Eres mayor de edad (:')
    } else if (edad === 16 || edad === 17) {
        reject('Eres adolecente')
    }else {
        reject('No eres menor de edad ):')
    }
})

    promesa
    .then((res) => {
        console.log(res)
        console.log('Este mensaje es cundo la promesa salio al 100')
    })
    .catch((error) =>{
        console.log('Ese mensaje es cuando la promesa salio mal')
        console.log(error)
    })
    .finally(() => {
        console.log('Final de la promesa')
    })

//    const callbackHell =  ((err, res, body) => {
//         res( (err, resp, body) => {
//             resp((err, res, body) => {
//                 res((err, res, body) => {
//                     res()
//                 })
//             })
//         })
//     })