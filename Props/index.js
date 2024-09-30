    import React from "react"
    import ReactDOM from "react-dom"

    function App() {
        const firstName = "Joe"
        const lastName = "Schmoe"
        
        return (
            /* so as we include curly brackets we are in the land of js and as soon as we close them we are back in the land of jsx */
            <h1>Hello {firstName}  {lastName}!</h1>
        )
    }

    ReactDOM.render(<App />, document.getElementById("root"))