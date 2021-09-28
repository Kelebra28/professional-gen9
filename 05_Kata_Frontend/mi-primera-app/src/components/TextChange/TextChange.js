import React, { Component} from 'react'
import Button from '../Button/Button'


class TextChange extends Component {

    constructor(props) {
        super(props)
        // state es una palabra reservada de React para guardar el estado
        this.state = {
            stringChange: props.primary // -> Principal vale Hola
        }
    }
    // Esta funcion la hice para poder modificar mi estado
    setMyState = () => {
        // setState es una palabra reservada de React que me permite modificar mi estado
        this.setState({
            stringChange: "Cambio de estado"
        })
    }

    render() {
        // descontruncion
        const {stringChange} = this.state
        return (
            <div>
                <h1>{`Cambio de estado en texto: ${this.state.stringChange}`}</h1>
                <Button  
                    title="Cambio de nombre"
                    myFuction={this.setMyState}
                    myString={stringChange}
                />

            </div>
        )
    }

}

export default TextChange