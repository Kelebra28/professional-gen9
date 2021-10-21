import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <ul>
               
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pokemon/view">Pokemones</Link>
                </li>
                <li>
                    <Link to="/formulario">Formulario</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar