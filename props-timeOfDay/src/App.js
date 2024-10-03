
import './App.css';

function App() {
  const date=new Date()
  const hours= date.getHours()
  const currenTime= date.toLocaleTimeString()
  let timeOfDay

  if (hours<12){
    timeOfDay="morning"
  }
  else if (hours>=12&& hours<17){
timeOfDay="afternoon"
  }
  else{
    timeOfDay="night"
  }
  return (
    <div className="App">
      <h1>Good {timeOfDay} </h1>
      <h2>It is currently {currenTime}</h2>
    </div>
  );
}


export default App;
