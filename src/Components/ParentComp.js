import React from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "Ruth Chisom"
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Ruth Chisom"
            })
        },3000)
    }

    render(){
        console.log("Parent Component render");
        return (
            <div>
                I am the Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;