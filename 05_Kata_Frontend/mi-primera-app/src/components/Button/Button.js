import React, {Component} from "react";

class Button extends Component {

    render(){
        return (
            <button onClick={() => this.props.myFuction(this.props.myString)}>
                {this.props.title}
            </button>
        )
    }
}

export default Button