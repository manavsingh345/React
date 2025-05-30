
import Counter from "./Counter.jsx";
import { useState, useEffect } from "react";
function App() {
  //conditional rendering.
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setCounterVisible(c => !c)
    }, 5000);
  }, []);
  return (
    <div>
      <b>Hi Manav</b>
      {counterVisible && <Counter />}
      <b>Hi there! </b>

    </div>
  )
}

export default App
