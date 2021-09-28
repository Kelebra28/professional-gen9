import React, { Component} from 'react'
import ButtonCounter from '../ButtonCounter/ButtonCounter'


class Counter extends Component {

    constructor(props) {
        super(props)
        // state es una palabra reservada de React para guardar el estado
        this.state = {
            count: Number(props.init), // Mi inicio lo paso a NUMERICO 
            count2: props.secundary,
        }
    }
    // Esta funcion la hice para poder modificar mi estado
    setMyState = (myState, number) => {
        // setState es una palabra reservada de React que me permite modificar mi estado
        this.setState({
            [myState] : number
        })
    }

    render() {
        // descontruncion
        const {count, count2} = this.state
        return (
            <div>
                <h1>{`Contador: ${count}`}</h1>
                <ButtonCounter  
                    title="Sumar"
                    myFuction={this.setMyState}
                    myCount={count + 1}
                    myState="count"
                />

            </div>
        )
    }

}

export default Counter