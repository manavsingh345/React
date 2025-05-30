import { useState, createContext, useContext } from 'react';
import './App.css'

const BulbContext = createContext();
function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <Light />
      </BulbContext.Provider>
    </div>
  )
}

function Light() {

  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);

  return (
    <div>
      {bulbOn ? "Bulb on" : "Bulb off"}
    </div>
  )
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  )
}
export default App
