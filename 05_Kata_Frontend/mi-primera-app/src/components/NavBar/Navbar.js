
import React, {Component} from "react"
import Links from "../Links/Links"
import '../../styles/saludo.css'

class Navbar extends Component {


    render() {
        return(
            <div className="nav_container">
                <Links text="Home" href="/xd"/>
                <Links text="Nosotros" href="/ola"/>
                <Links text="Compras" href="/xdola"/>
                <Links text="Cuenta" href="/olaxd"/>
            </div>
        )
    }
}

export default Navbar