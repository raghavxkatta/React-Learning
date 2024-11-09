import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    const thingsElements=thingsArray.map(things=>{
        return  <p>{things}</p>
    })
    function addItem(){
        const newThingText= `thing${thingsArray.length+1}`
        thingsArray.push(newThingText)
    console.log(thingsArray)
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));