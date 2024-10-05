import React  from "react";

export default function Joke(props){
    console.log(props)
    return(
        <div>
            {/* this says of props.setup is a truthy value then render the thing on the right side of my and operator, If it's a falsie value it won't render anything */}
        {props.Setup&&<h3>Setup:{props.Setup}</h3>}
        <p>{props.Punchline}</p>
        </div>
    )
}