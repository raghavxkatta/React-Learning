import React from "react";
export default function Counter() {
    const [count, setCount] = React.useState(0)
    /**
     *  if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter , 
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    function subtract() {
        setCount(prevCount => prevCount - 1)
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