import { useState } from 'react'
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"



const PokemonsView = () => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'
    //   data -> variable para guardar info
    // setData -> funcion que me permite modifcar data
    const [data, setData] = useState({})
    const [numberPokemon, setNumberPokemon] = useState(1)

    const getPokemon = async () => {
        try {
            const response = await axios.get(`${URL_BASE}${numberPokemon}`)
            // console.log(response.data)
            setData(response.data)

        } catch (err) {
            console.log(err);
        }
    }


    const handleClick = () => {
        setNumberPokemon(numberPokemon + 1)
        getPokemon()
    }

    // console.log(numberPokemon);
    // console.log(data);

    return(
        <>
        <h1>Vamos a conocer Pokemones</h1>
        <Pokemon name={data.name} id={data.id}  imgPokemon={data.sprites?.front_default} />
        <button onClick={handleClick}>Pedir Pokemon</button>
        </>
    )
}

export default PokemonsView