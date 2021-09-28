import React, {Component} from "react";

class ButtonCounter extends Component {

    render(){
        return (
            <button onClick={() => this.props.myFuction(this.props.myState, this.props.myCount)}>
                {this.props.title}
            </button>
        )
    }
}

export default ButtonCounter