import React from "react";
export default function Counter() {
    const [count,setCount]=React.useState(0)
    function add(){
        setCount(count+1)
    }
    function subtract(){
        setCount(count-1)
    }
    return (
        <div className="Counter">
            <button className="counter--" onClick={subtract}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter++" onClick={add}>+</button>
        </div>
    )
}