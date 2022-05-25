//Higher Order Components - functions that combine components to return a new component
import React from "react";

const UpdatedComp = OriginalComp =>{
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="The user"/>;
        }
    }
    return NewComp;
}

export default UpdatedComp;