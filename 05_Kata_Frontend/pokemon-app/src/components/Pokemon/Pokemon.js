import './Pokemon.scss'

const Pokemon = ({name, id, imgPokemon}) => {


    return (
        <>
            <h2>{name}</h2>
            <h2>{id}</h2>
            {imgPokemon &&  <img src={imgPokemon} alt={imgPokemon} />}
           
        </>
    )
}

export default Pokemon