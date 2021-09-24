import React, {Component} from "react";

class Links extends Component {


    render() {
        // props -> href  y text
        return(
            <a href={this.props.href}>{this.props.text}</a>
        )
    }
}

export default Links