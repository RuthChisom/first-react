//Pure Components - renders the same output for the same state and props. It is rendered just once
import React from "react";

class PureComp extends React.PureComponent{
    render(){
        console.log("Pure Component render");
        return <p>I am the Pure Component by {this.props.name}</p>
    }
}

export default PureComp;