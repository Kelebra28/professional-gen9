import { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"



const PokemonsView = () => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'
    //   data -> variable para guardar info
    // setData -> funcion que me permite modifcar data
    const [data, setData] = useState({})
    const [numberPokemon, setNumberPokemon] = useState(1)
    const [error, setError] = useState(false)

    const getPokemon = async (id) => {
        try {
            const response = await axios.get(`${URL_BASE}${id}`)
            // console.log(response.data)
            setData(response.data)
            setNumberPokemon(id)
            setError(false)

        } catch (err) {
            console.log(err);
            setError(true)
        }
    }


    const handleClick = () => {
        // getPokemon(numberPokemon + 1)
        setNumberPokemon(numberPokemon + 1)
    }

    const reversePokemon = () => {
        setNumberPokemon(numberPokemon -1)
    }

    const handleChange = (e) => {
        // e -> es de event
        // console.log(e.target.value)
        setNumberPokemon(e.target.value)
    }

    // dentro de los corchtes van la variable que estara escuchando para ejecutarse
    // si no hay nada, solo se va a ejecutar una sola vez al principio del mi ciclo de vida
    useEffect(() => {
        getPokemon(numberPokemon)
    }, [numberPokemon])

    // console.log(numberPokemon)
    return(
        <>
        <h1>Vamos a conocer Pokemones</h1>
        <input type="text" name="searchPokemon" id="searchPokemon" onChange={handleChange} />
        {error === true ? <h3>Este Pokemon no existe</h3> :  <Pokemon name={data.name} id={data.id}  imgPokemon={data.sprites?.front_default} />}
        { numberPokemon < 899 ?  <button onClick={handleClick}>Pedir Pokemon</button> : null}
       
        {numberPokemon > 1 ? <button onClick={reversePokemon}>Regresar pokemon</button> : null}
        </>
    )
}

export default PokemonsView