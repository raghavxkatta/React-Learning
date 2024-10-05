import React  from "react";

export default function Joke(props){
    console.log(props)
    return(
        <div>
            {/* This basically means when prop-setup does not existit has a display of none and vice versa */}
                <h3 style={{display:props.Setup ? "block":"none"}}>Setup: {props.Setup}</h3>
        {props.Setup&&<h3>Setup:{props.Setup}</h3>}
        <p>{props.Punchline}</p>
        </div>
    )
}