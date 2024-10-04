1. What do props help us accomplish?

A1. props help us to reduce the amount of code, it helps in reusing of components. We don't need to make a component again and again and hardcode it's data in it.


2. How do you pass a prop into a component?
<!-- img src="" -->

<!-- <MyAwesomeHeader  title=""
phone=""
/> -->
A2. In the same way you pass attributes to HTML elements like a source attribute for an image 


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
 A3. You cannot add custom prop to a native DOM element because when React sees a regular HTMl element that we're trying to render it makes them turn into Real DOM elements. And real DOM elements
only have the prooperties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?

A4. function Navbar(props) {
    return (
        <header>
            ...
            props.something
        </header>
    )
}
<!-- simply enough the parameters of the component function will recieve that value -->

<!-- The parameter that you put inside your component will be an object that represents all of the props that your component recieved  -->
5. What data type is `props` when the component receives it?

A5. It is an object which uses dot syntax
