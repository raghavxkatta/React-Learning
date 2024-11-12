import React from "react";
export default function App(){
    const {isImportant,func} = React.useState("Yes")/* this makes an array whose first value is "Yes", the array has two things one the state variable */
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

