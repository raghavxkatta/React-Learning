import React from "react";
export default function App(){
    /* to create a new state we use React.useState */
    const {isImportant,setIsImportant} = React.useState("Yes")/* this makes an array whose first value is "Yes", the array has two things one the state variable, conventionally the function is written as set_stateName */
    
/* so basically the function's (setIsImportant) job is to change state immediately */
    function handleClick(){
    setIsImportant("No")
    }
    return (
        <div className="state" onClick={handleClick} >
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

