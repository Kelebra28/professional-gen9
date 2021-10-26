
import React from 'react'

//         Se recive como parametro un compoente
const SaluodHoc = SaludoRecivido => props => {

    const dia = 'Martes'
    const request  = { 
        fetch: false,
        data: true,
        error: false
    }

    return (
        <>
            { request.fetch && request.data === false  ?   <h1>Cargando...</h1> : <SaludoRecivido {...props}  dia={dia}/>} 
            {request.fetch === false && request.data === false ? <h1>Ocurrio un erroe inesperado </h1> : null}  
        </>
    )

}

export default SaluodHoc