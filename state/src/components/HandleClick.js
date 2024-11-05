import React from "react";
export default function Handle(){
    function handleClick(){
        console.log("I was clicked")
    }
return(
    <div className="container">
<img src="https://picsum.photos/640/360" alt="random"/>
<button onClick={handleClick}>Click Me</button>{/* we will not enter the function() but rather as a value function without brackets because it then runs the function immediately as soon as the code reaches the particular line of code */}
    </div>
)
}