const axios = require('axios');


const URL_BASE = 'https://swapi.dev/api/people/'


// Axios ya regresa la promesa
// axios.get(`${URL_BASE}123123/`)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


const getPerson = async () => {

    try{
        const respone = await axios.get(`${URL_BASE}1/`)
        const respone2 = await axios.get(`${URL_BASE}2/`)
        console.log('Personaje 1',respone.data.name)
        console.log('Personaje 2', respone2.data.name)
    }
    catch (err) {
        console.log(err)
    }
}   

getPerson()