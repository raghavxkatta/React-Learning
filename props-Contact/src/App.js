import './App.css';
import Contact from "./components/Contact"
import mrWhiskerson from './assets/mr-whiskerson.png';
import fluffykins from './assets/fluffykins.png';
import felix from './assets/felix.png';
import pumpkin from './assets/pumpkin.png';
function App() {
  return (
    <div className="Contacts">
<Contact
img={mrWhiskerson}
name="Mr. Whiskerson"
phone="(212) 555-1234" 
mail="mr.whiskaz@catnap.meow"/> 
   
<Contact
 img={fluffykins}
 name="Fluffykins" 
 phone="(212) 555-2345"
 mail="fluff@me.com"  />  
<Contact 
img={felix}
name="Felix"
phone="(212) 555-4567"
mail="thecat@hotmail.com"/>    
<Contact 
img={pumpkin}
name="Pumpkin"
phone="(0800) CAT KING"
mail="pumpkin@scrimba.com"/>      
</div>
  );
  
}

export default App;
