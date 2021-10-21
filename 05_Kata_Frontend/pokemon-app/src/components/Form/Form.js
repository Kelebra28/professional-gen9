import React from 'react'

const Formulario = () => {

    const handleClick = () => {
        console.log('De de click');
    }

    const handleOnChange = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Envie la enformacion');
    }


    return(
        <form  onSubmit={(e) =>handleSubmit(e)}>
            <input type="text" onChange={(e) => handleOnChange(e)} placeholder="Cual es tu nombre" />
            <button  type="button" onClick={() => handleClick()}>Te gusta el cine</button>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario