import './App.css';

function App() {
  const colors = [
    <h3>Red</h3>, 
    <h3>Orange</h3>, 
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>
]
  return (
    <div className="App">
   {colors}
    </div>
  );
}

export default App;
