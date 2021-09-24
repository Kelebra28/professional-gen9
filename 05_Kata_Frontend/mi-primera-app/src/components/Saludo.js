import React, { Component } from 'react' 
import '../styles/saludo.css'

//Class Componet

class ClassSaludo extends Component {

    render() {

        return (
            <div>
                <div className="saludo"> Hola desde React </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}


export default ClassSaludo