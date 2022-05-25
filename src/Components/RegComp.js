import React from "react";

class RegComp extends React.Component{
    render(){
        console.log("Regular Component render");
        return (
            <div>
                I am the Regular Component by {this.props.name}
            </div>
        )
    }
}

export default RegComp;